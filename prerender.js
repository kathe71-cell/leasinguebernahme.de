import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const sitemapContent = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8');
const locMatches = [...sitemapContent.matchAll(/<loc>https:\/\/www\.xn--leasingbernahme-5vb\.de(.*?)<\/loc>/g)];
const sitemapRoutes = locMatches.map(m => m[1] || '/');

const routes = Array.from(new Set([
  '/',
  ...sitemapRoutes,
  '/rechner-embed'
]));

console.log(`Starting prerendering of ${routes.length} routes for leasinguebernahme.de...`);

for (const url of routes) {
  try {
    const { html: appHtml } = render(url);
    const html = template.replace(/<div id="root"[^>]*><\/div>/, `<div id="root">${appHtml}</div>`);

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
    const fullPath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html);
    console.log(`  ✓ ${url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${url}:`, err);
    process.exit(1);
  }
}

console.log('Prerendering complete!');
