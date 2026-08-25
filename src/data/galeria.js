/* =====================================================================
   GALERIA — fotos da operação (Cone Sul).

   Para inserir uma foto nova:
   1. Coloque o arquivo (PNG/JPG) em  public/images/
   2. Rode:  npm run optimize:images   (gera o .webp leve automaticamente)
   3. Aponte "image" abaixo para  "/images/<arquivo>.webp"

   image: null  → exibe um slot premium editável (placeholder marcado).
   span: 'wide' (2 colunas) | 'tall' (2 linhas, ideal p/ foto vertical) | ''
   ===================================================================== */

export const galeria = [
  { id: 'rota', label: 'Operação em rota', span: 'wide', image: '/images/rota-cordilheira.webp' },
  { id: 'frota', label: 'Frota Mondel', span: '', image: '/images/patio-frota.webp' },
  { id: 'frio', label: 'Cadeia do frio', span: 'tall', image: '/images/andes-inverno.webp' },
  // Os dois 'tall' ficam no topo: com grid-auto-flow dense, os 9 cards fecham 3x4 sem buracos.
  { id: 'armazenagem', label: 'Armazenagem e distribuição', span: 'tall', image: '/images/armazenagem.webp' },
  { id: 'aduana', label: 'Despacho aduaneiro', span: '', image: '/images/aduana-tambores.webp' },
  { id: 'terminal', label: 'Operação no terminal', span: '', image: '/images/terminal-carga.webp' },
  {
    id: 'carregamento',
    label: 'Carregamento na operação',
    span: '',
    image: '/images/carregamento-bigbags.webp',
  },
  { id: 'rastreamento', label: 'Rastreamento 24/7', span: '', image: '/images/operacao-doca.webp' },
  { id: 'consolidada', label: 'Carga consolidada', span: '', image: '/images/carga-consolidada.webp' },
];

export default galeria;
