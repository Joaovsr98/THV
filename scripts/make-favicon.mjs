/* Gera os favicons a partir do logo oficial (os arcos da marca).
   Uso: node scripts/make-favicon.mjs */
import sharp from 'sharp';

const LOGO = 'src/assets/logo/mondel-group.webp';

async function make(size, out, pad, bg) {
  const inner = size - pad * 2;
  const arcs = await sharp(LOGO)
    .extract({ left: 0, top: 0, width: 200, height: 96 }) // banda dos arcos
    .resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: arcs, gravity: 'center' }])
    .png()
    .toFile(out);
  console.log('gerado', out, `${size}x${size}`);
}

const white = { r: 255, g: 255, b: 255, alpha: 1 };
await make(180, 'public/apple-touch-icon.png', 26, white);
await make(48, 'public/favicon-48.png', 5, white);
await make(32, 'public/favicon-32.png', 3, white);
