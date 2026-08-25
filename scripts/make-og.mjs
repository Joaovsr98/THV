/* Gera a imagem de compartilhamento (Open Graph) — public/og-image.jpg.
   Uso: node scripts/make-og.mjs */
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1b3d"/>
      <stop offset="0.55" stop-color="#0b1f47"/>
      <stop offset="1" stop-color="#060f24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g fill="none" stroke="#7fb0ff" stroke-opacity="0.09" stroke-width="1.6">
    <path d="M-20 150 C 300 90, 720 250, 1220 140"/>
    <path d="M-20 340 C 300 300, 720 430, 1220 320"/>
    <path d="M-20 520 C 300 480, 720 590, 1220 500"/>
  </g>
  <path d="M 150 530 C 430 440, 720 420, 1070 210" fill="none" stroke="#d81e27" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="150" cy="530" r="8" fill="#060f24" stroke="#d81e27" stroke-width="3"/>
  <circle cx="620" cy="418" r="6" fill="#d81e27"/>
  <circle cx="1070" cy="210" r="10" fill="#d81e27"/>
  <text x="92" y="150" fill="#cfe4f5" font-family="Consolas, monospace" font-size="23" letter-spacing="4">TRANSPORTE INTERNACIONAL · CONE SUL · DESDE 1989</text>
  <text x="88" y="292" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold" font-size="78">O elo que conecta</text>
  <text x="88" y="378" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold" font-size="78">o Cone Sul.</text>
  <text x="92" y="468" fill="#ffffff" fill-opacity="0.72" font-family="Arial, sans-serif" font-size="29">Brasil · Argentina · Uruguai · Paraguai · Chile</text>
  <text x="92" y="560" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold" font-size="34" letter-spacing="1">MONDEL <tspan fill="#d81e27">GROUP</tspan></text>
  <text x="1108" y="560" text-anchor="end" fill="#9aa3b2" font-family="Consolas, monospace" font-size="22">Uniendo el Cono Sur</text>
</svg>`;

const info = await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile('public/og-image.jpg');
console.log(`og-image.jpg gerada: ${info.width}x${info.height} · ${(info.size / 1024).toFixed(0)}KB`);
