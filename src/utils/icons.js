/* =====================================================================
   REGISTRO DE ÍCONES
   Importa apenas os ícones realmente usados (tree-shaking eficiente).
   Os dados (servicos.js, frota.js...) referenciam o ícone pelo nome;
   este mapa resolve o nome para o componente correspondente.
   Ao adicionar um novo ícone nos dados, importe-o aqui também.
   ===================================================================== */

import {
  Truck,
  Boxes,
  Box,
  Container,
  Snowflake,
  TriangleAlert,
  Satellite,
  FileCheck2,
  ShieldCheck,
  Timer,
  Globe2,
  Zap,
  PiggyBank,
  Target,
  Package,
} from 'lucide-react';

export const iconMap = {
  Truck,
  Boxes,
  Box,
  Container,
  Snowflake,
  TriangleAlert,
  Satellite,
  FileCheck2,
  ShieldCheck,
  Timer,
  Globe2,
  Zap,
  PiggyBank,
  Target,
  Package,
};

/** Retorna o componente de ícone pelo nome, com fallback seguro. */
export function getIcon(name) {
  return iconMap[name] || Package;
}

export default getIcon;
