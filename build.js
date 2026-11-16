// Simple build: validates inline JS syntax, then copies src/ -> dist/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

const html = fs.readFileSync(path.join(src, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!scripts.length) throw new Error('No inline <script> found in src/index.html');
scripts.forEach((code, i) => {
  try { new vm.Script(code, { filename: `inline-script-${i}.js` }); }
  catch (e) { console.error('JavaScript syntax error:', e.message); process.exit(1); }
});

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(src, dist, { recursive: true });
console.log(`Build OK -> dist/ (${(html.length / 1024).toFixed(1)} KB)`);
