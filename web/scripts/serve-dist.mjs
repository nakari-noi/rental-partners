// Statický server nad web/dist na náhľad návrhov (astro preview sa z podprocesu nespúšťa).
// Použitie: cd web && npm run build && node scripts/serve-dist.mjs  → http://127.0.0.1:4399
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = process.argv[2] || fileURLToPath(new URL('../dist/', import.meta.url)); const port = +process.argv[3] || 4399;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.avif': 'image/avif', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2' };
createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = join(root, p);
  try { if ((await stat(f)).isDirectory()) f = join(f, 'index.html'); } catch { f = f + '.html'; try { await stat(f); } catch { f = join(root, p, 'index.html'); } }
  try { const b = await readFile(f); res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' }); res.end(b); }
  catch { res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' }); res.end(await readFile(join(root, '404.html'))); }
}).listen(port, '127.0.0.1', () => console.log('serving ' + root + ' on ' + port));
