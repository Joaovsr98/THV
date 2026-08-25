/* =====================================================================
   OTIMIZAÇÃO DE IMAGENS — Mondel
   Varre as pastas de imagens, converte qualquer PNG/JPG em WebP leve
   (redimensionado) e remove o arquivo original. Idempotente: rodar de
   novo não faz nada se só houver .webp.

   Fluxo: solte as fotos em public/images/ e rode:
     npm run optimize:images
   ===================================================================== */
import sharp from 'sharp';
import { readdir, stat, rm } from 'node:fs/promises';
import path from 'node:path';

const folders = [
  { dir: 'public/images', width: 1400 }, // operação / galeria
  { dir: 'public/travessia', width: 900 }, // moldura em arco (menor)
];

const RASTER = /\.(png|jpe?g)$/i;
const kb = (n) => (n / 1024).toFixed(0);

let count = 0;
for (const { dir, width } of folders) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    continue;
  }
  for (const file of files.filter((n) => RASTER.test(n))) {
    const src = path.join(dir, file);
    const out = src.replace(RASTER, '.webp');
    try {
      const before = (await stat(src)).size;
      const info = await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
      await rm(src);
      console.log(`✓ ${out}  ${info.width}x${info.height}  ${kb(before)}KB → ${kb(info.size)}KB`);
      count++;
    } catch (e) {
      console.error(`✗ ${src}: ${e.message}`);
    }
  }
}

console.log(count ? `Concluído: ${count} imagem(ns) otimizada(s).` : 'Nada para otimizar.');
