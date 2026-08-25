/* =====================================================================
   FROTA
   Para inserir as fotos reais: coloque os arquivos em
   src/assets/images/frota/ e atualize o campo "image" com o import,
   ou aponte para o nome do arquivo dentro de /public/frota/.
   Enquanto não houver foto, um placeholder estilizado é exibido.
   ===================================================================== */

export const frota = [
  {
    id: 'carreta-bau',
    nome: 'Carreta Baú',
    specs: 'Carga seca • até 30 t',
    icon: 'Truck',
    image: null,
  },
  {
    id: 'refrigerado',
    nome: 'Baú Refrigerado',
    specs: 'Cadeia do frio • até -22°C',
    icon: 'Snowflake',
    image: null,
  },
  {
    id: 'sider',
    nome: 'Carreta Sider',
    specs: 'Carga paletizada • lona lateral',
    icon: 'Container',
    image: '/images/sider-terminal.webp',
  },
  {
    id: 'graneleiro',
    nome: 'Cavalo Mecânico',
    specs: 'Longa distância • rotas internacionais',
    icon: 'Truck',
    image: '/images/frota-cavalos.webp',
  },
];

export default frota;
