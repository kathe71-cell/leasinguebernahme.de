const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
};

const extractLinks = () => {
    const files = getAllFiles(path.join(__dirname, 'src'));
    const urlRegex = /(https?:\/\/[^\s"'`<>]+)/g;
    const links = new Set();
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(urlRegex);
        if (matches) {
            matches.forEach(link => {
                if(!link.includes('localhost') && !link.includes('schema.org') && !link.includes('form.partner-versicherung.de')) {
                    links.add(link);
                }
            });
        }
    });
    return Array.from(links);
};

const checkLink = (url) => {
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            method: 'HEAD',
            timeout: 5000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        
        const req = protocol.request(url, options, (res) => {
            if (res.statusCode >= 400 && res.statusCode !== 405) { // 405 Method Not Allowed sometimes happens on HEAD
                // try GET if HEAD fails with 403 or something
                if(res.statusCode === 403) {
                   resolve({url, status: res.statusCode, broken: false, reason: '403 Forbidden (likely anti-bot)'});
                } else {
                   resolve({url, status: res.statusCode, broken: true});
                }
            } else {
                resolve({url, status: res.statusCode, broken: false});
            }
        });
        
        req.on('error', (e) => {
            resolve({url, status: e.message, broken: true});
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve({url, status: 'TIMEOUT', broken: true});
        });
        
        req.end();
    });
};

async function main() {
    const links = extractLinks();
    console.log(`Found ${links.length} external links. Checking...`);
    
    const brokenLinks = [];
    
    for(const link of links) {
        // Skip some obvious good ones or internal ones if needed
        if(link.includes('leasingübernahme.de') || link.includes('leasinguebernahme.de') || link.includes('lucide.dev') || link.includes('fonts.googleapis.com')) {
           continue;
        }
        try {
           const result = await checkLink(link);
           if (result.broken) {
               console.log(`[BROKEN] ${result.status}: ${link}`);
               brokenLinks.push(result);
           } else {
               // console.log(`[OK] ${result.status}: ${link}`);
           }
        } catch(e) {
            console.log(`[ERROR] ${link}: ${e.message}`);
        }
    }
    
    console.log(`\nFound ${brokenLinks.length} broken links.`);
}

main();
