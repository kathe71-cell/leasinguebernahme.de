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
  '/projektuebernahme',
  '/',
  ...sitemapRoutes,
  '/rechner-embed'
]));

const pageMetadata = {
  '/': {
    title: 'Leasingübernahme Ratgeber | Ablauf, Umschreibungsgebühren & Rechner',
    description: 'Der unabhängige Ratgeber für Leasingübernahmen: Kosten sparen, Restlaufzeiten übernehmen und Umschreibungsgebühren aller Leasingbanken vergleichen.'
  },
  '/marken': {
    title: 'Marken-Übersicht für Leasingübernahmen | VW, Audi, BMW & Mercedes',
    description: 'Ratgeber und Bank-Richtlinien zur Leasingübernahme aller großen Automarken im Vergleich.'
  },
  '/info': {
    title: 'Ablauf der Leasingübernahme | 4 Schritte zur Vertragsübernahme',
    description: 'Wie läuft eine Leasingübernahme ab? Der Schritt-für-Schritt-Leitfaden von Bonitätsprüfung bis Schlüsselübergabe.'
  },
  '/vorteile-nachteile': {
    title: 'Vor- & Nachteile einer Leasingübernahme | Objektiver Vergleich',
    description: 'Wann lohnt sich eine Leasingübernahme? Vor- und Nachteile für Übernehmer und Altleser übersichtlich analysiert.'
  },
  '/kosten-gebuehren': {
    title: 'Umschreibungsgebühren der Leasingbanken | VWFS, BMW, Mercedes Bank',
    description: 'Übersicht der Bearbeitungsgebühren für Vertragsübernahmen bei allen führenden Leasinggesellschaften.'
  },
  '/faq': {
    title: 'Leasingübernahme FAQ | Häufige Fragen & Antworten',
    description: 'Antworten auf häufig gestellte Fragen zu Bonität, Versicherung, Restwert und Umschreibung.'
  },
  '/checkliste': {
    title: 'Muster-Übergabeprotokoll & Checkliste für Leasingübernahmen',
    description: 'Kostenlose Checkliste und Mustervorlage für das Übergabeprotokoll bei Leasingübernahme.'
  },
  '/leasinguebernahme-privat-an-gewerbe': {
    title: 'Leasingübernahme Privat an Gewerbe | Steuer & MwSt. Ratgeber',
    description: 'Leasingübernahme von Privat an Gewerbe: Vorsteuerabzug, Sonderzahlung und steuerliche Besonderheiten.'
  },
  '/leasingvertrag-vorzeitig-kuendigen': {
    title: 'Vorzeitige Leasing-Kündigung vs. Übernahme | Kosten & Ratgeber',
    description: 'Vorzeitige Leasing-Kündigung vermeiden: Warum eine Leasingübernahme meist Tausende Euro spart.'
  },
  '/marke-volkswagen': {
    title: 'Volkswagen Leasingübernahme | Umschreibung & VWFS Bedingungen',
    description: 'Leitfaden zur Volkswagen Leasingübernahme: VWFS Umschreibungsgebühren, Bonitätsprüfung & Ablauf.'
  },
  '/marke-audi': {
    title: 'Audi Leasingübernahme | Umschreibungsgebühren & VWFS Regeln',
    description: 'Leitfaden zur Audi Leasingübernahme: Umschreibungsgebühren der Audi Leasing / VWFS & Ablauf.'
  },
  '/marke-bmw': {
    title: 'BMW Leasingübernahme | Umschreibungsgebühren & BMW Bank Ablauf',
    description: 'Leitfaden zur BMW Leasingübernahme: Umschreibungsgebühren der BMW Bank GmbH & Voraussetzungen.'
  },
  '/marke-mercedes': {
    title: 'Mercedes-Benz Leasingübernahme | Umschreibung & MBFS Ablauf',
    description: 'Leitfaden zur Mercedes-Benz Leasingübernahme: Mercedes-Benz Bank Umschreibungsgebühren & Regeln.'
  },
  '/marke-skoda': {
    title: 'Škoda Leasingübernahme | Umschreibung & VWFS Leitfaden',
    description: 'Leitfaden zur Škoda Leasingübernahme: Gebühren, Ablauf und Bedingungen der Volkswagen Leasing.'
  },
  '/marke-seat': {
    title: 'SEAT Leasingübernahme | Umschreibung & VWFS Vorgaben',
    description: 'Leitfaden zur SEAT Leasingübernahme: Umschreibungsgebühren und Bedingungen von SEAT Financial Services.'
  },
  '/marke-cupra': {
    title: 'CUPRA Leasingübernahme | Umschreibung & VWFS Vorgaben',
    description: 'Leitfaden zur CUPRA Leasingübernahme: Umschreibungsgebühren und Ablauf über SEAT Financial Services / VWFS.'
  },
  '/marke-ford': {
    title: 'Ford Leasingübernahme | Umschreibungsgebühren & Ford Bank Ablauf',
    description: 'Leitfaden zur Ford Leasingübernahme: Umschreibungsgebühren der Ford Bank & Bedingungen.'
  },
  '/marke-opel': {
    title: 'Opel Leasingübernahme | Umschreibung & Stellantis Bank Regeln',
    description: 'Leitfaden zur Opel Leasingübernahme: Umschreibungsgebühren und Ablauf der Stellantis Financial Services.'
  },
  '/marke-hyundai': {
    title: 'Hyundai Leasingübernahme | Umschreibungsgebühren & HYUNDAI Finance',
    description: 'Leitfaden zur Hyundai Leasingübernahme: Umschreibungsgebühren & Bedingungen von Hyundai Finance.'
  },
  '/marke-kia': {
    title: 'Kia Leasingübernahme | Umschreibungsgebühren & KIA Finance Ablauf',
    description: 'Leitfaden zur Kia Leasingübernahme: Umschreibungsgebühren und Vertragsübernahme bei Kia Finance.'
  },
  '/marke-tesla': {
    title: 'Tesla Leasingübernahme | Umschreibungsgebühren & Ablauf',
    description: 'Tesla Leasingübernahme Leitfaden: Tesla Financial Services Umschreibungsregeln und App-Übertragung.'
  },
  '/marke-toyota': {
    title: 'Toyota Leasingübernahme | Toyota Financial Services Ratgeber',
    description: 'Leitfaden zur Toyota Leasingübernahme: Bedingungen und Umschreibungsgebühren von Toyota Financial Services.'
  },
  '/marke-renault': {
    title: 'Renault Leasingübernahme | Mobilize Financial Services Ablauf',
    description: 'Leitfaden zur Renault Leasingübernahme: Umschreibung über Mobilize Financial Services.'
  },
  '/marke-peugeot': {
    title: 'Peugeot Leasingübernahme | Stellantis Financial Services Ablauf',
    description: 'Leitfaden zur Peugeot Leasingübernahme: Ablauf und Gebühren bei Stellantis Financial Services.'
  },
  '/marke-citroen': {
    title: 'Citroën Leasingübernahme | Stellantis Financial Services Ablauf',
    description: 'Leitfaden zur Citroën Leasingübernahme: Vertragsübernahme bei Stellantis Bank.'
  },
  '/marke-fiat': {
    title: 'Fiat Leasingübernahme | Stellantis Bank Umschreibungsregeln',
    description: 'Leitfaden zur Fiat Leasingübernahme: Bedingungen der Stellantis Financial Services.'
  },
  '/marke-nissan': {
    title: 'Nissan Leasingübernahme | Nissan Financial Services Ratgeber',
    description: 'Leitfaden zur Nissan Leasingübernahme: Ablauf und Gebühren bei Nissan Financial Services.'
  },
  '/marke-mazda': {
    title: 'Mazda Leasingübernahme | Umschreibung & Mazda Finance',
    description: 'Leitfaden zur Mazda Leasingübernahme: Bedingungen und Umschreibungsgebühren von Mazda Finance.'
  },
  '/marke-mini': {
    title: 'MINI Leasingübernahme | Umschreibung & BMW Bank Abwicklung',
    description: 'Leitfaden zur MINI Leasingübernahme: Umschreibungsgebühren und Ablauf der BMW Bank.'
  },
  '/marke-volvo': {
    title: 'Volvo Leasingübernahme | Umschreibungsgebühren & Volvo Car Financial',
    description: 'Leitfaden zur Volvo Leasingübernahme: Umschreibungsgebühren und Bedingungen von Volvo Car Financial Services.'
  },
  '/vw-golf-leasinguebernahme': {
    title: 'VW Golf 8 Leasingübernahme | Ablauf & VWFS Bestimmungen',
    description: 'Leitfaden zur Leasingübernahme eines VW Golf 8: Umschreibungsgebühren, Bonität & VWFS Bestimmungen.'
  },
  '/bmw-3er-leasinguebernahme': {
    title: 'BMW 3er Leasingübernahme | Konditionen der BMW Bank GmbH',
    description: 'Alles zur Übernahme von BMW 3er Leasingverträgen: Gebühren der BMW Bank, Bonitätsprüfung & Ablauf.'
  },
  '/audi-a4-leasinguebernahme': {
    title: 'Audi A4 Leasingübernahme | Audi Leasing (VWFS) Richtlinien',
    description: 'Vertragsübernahme für Audi A4: Konditionen der Audi Leasing (VWFS), Kosten und Voraussetzungen.'
  },
  '/tesla-model-y-leasinguebernahme': {
    title: 'Tesla Model Y Leasingübernahme | App-Transfer & Bankablauf',
    description: 'Ratgeber zur Übernahme von Tesla Model Y Leasingverträgen: Tesla Financial Services und App-Übertragung.'
  },
  '/impressum': {
    title: 'Impressum | Leasingübernahme.de',
    description: 'Rechtliche Angaben und Impressum gemäß § 5 DDG für Leasingübernahme.de.'
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | Leasingübernahme.de',
    description: 'Datenschutzerklärung nach Art. 13, 14 DSGVO für Leasingübernahme.de.'
  },
  '/rechner-embed': {
    title: 'Leasingübernahme Ersparnisrechner Widget',
    description: 'Kostenloses Rechner-Widget zur Berechnung der Ersparnis bei einer Leasingübernahme.'
  }
};

console.log(`Starting prerendering of ${routes.length} routes for leasinguebernahme.de...`);

for (const url of routes) {
  try {
    const { html: appHtml } = render(url);
    let html = template.replace(/<div id="root"[^>]*><\/div>/, `<div id="root">${appHtml}</div>`);

    const cleanUrl = url.replace(/^\//, '').replace(/\/$/, '');
    const key = url === '/' ? '/' : `/${cleanUrl}`;

    const meta = pageMetadata[key] || {
      title: 'Leasingübernahme Ratgeber | Ablauf, Umschreibungsgebühren & Rechner',
      description: 'Der unabhängige Ratgeber für Leasingübernahmen: Kosten sparen, Restlaufzeiten übernehmen und Umschreibungsgebühren aller Leasingbanken vergleichen.'
    };

    html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${meta.description}" />`);

    const canonicalUrl = `https://xn--leasingbernahme-5vb.de${url === '/' ? '/' : url}`;
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

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
