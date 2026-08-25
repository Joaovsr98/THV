/* =====================================================================
   SERVIÇOS — estrutura (a cópia por idioma fica em content/*.js → services.items).
   "cargoIndex" aponta para quote.cargoOptions (para pré-selecionar na Cotação).
   ===================================================================== */

export const servicos = [
  { id: 'ftl', icon: 'Truck', accent: 'blue', cargoIndex: 0 },
  { id: 'ltl', icon: 'Boxes', accent: 'blue', cargoIndex: 1 },
  { id: 'refrigerada', icon: 'Snowflake', accent: 'red', cargoIndex: 2 },
  { id: 'perigosa', icon: 'TriangleAlert', accent: 'red', cargoIndex: 3 },
  { id: 'satelite', icon: 'Satellite', accent: 'blue', cargoIndex: null },
  { id: 'aduana', icon: 'FileCheck2', accent: 'red', cargoIndex: null },
];

export default servicos;
