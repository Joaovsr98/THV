/* =====================================================================
   SERVIÇOS — THV Transportes
   Os 7 grupos de carga documentados na auditoria. Conteúdo autossuficiente
   (não depende de content/*.js). Descrições em nível de categoria — sem
   inventar tonelagem, capacidade ou especificação técnica não confirmada.

   accent: 'blue' (azul institucional) | 'cyan' (acento tecnológico).
   ===================================================================== */

export const servicos = [
  {
    id: 'acos-longos',
    icon: 'Ruler',
    accent: 'blue',
    subtitle: 'Carga siderúrgica',
    title: 'Aços Longos',
    text: 'Vergalhões, barras, fio-máquina e perfis — transporte dimensionado para produtos de grande comprimento.',
    long: 'Transporte especializado de aços longos, com estiva e amarração adequadas a produtos de grande comprimento. A experiência da THV com a cadeia siderúrgica garante o manuseio correto do carregamento à entrega.',
    highlights: ['Vergalhões e barras', 'Fio-máquina', 'Perfis estruturais'],
  },
  {
    id: 'acos-planos',
    icon: 'Layers',
    accent: 'blue',
    subtitle: 'Carga siderúrgica',
    title: 'Aços Planos',
    text: 'Chapas e bobinas laminadas, com estiva e amarração adequadas ao produto plano.',
    long: 'Movimentação de aços planos — chapas e bobinas — com acondicionamento que preserva a integridade do produto durante todo o trajeto.',
    highlights: ['Chapas', 'Bobinas laminadas', 'Estiva controlada'],
  },
  {
    id: 'acos-nao-planos',
    icon: 'Shapes',
    accent: 'blue',
    subtitle: 'Carga siderúrgica',
    title: 'Aços não Planos',
    text: 'Perfis e produtos de geometria variada, transportados com o mesmo rigor de estiva.',
    long: 'Transporte de aços não planos, com planejamento de carga que respeita a geometria de cada produto e mantém a segurança da operação.',
    highlights: ['Perfis', 'Cantoneiras', 'Formas especiais'],
  },
  {
    id: 'tubos-aco',
    icon: 'Cylinder',
    accent: 'cyan',
    subtitle: 'Carga siderúrgica',
    title: 'Tubos de Aço',
    text: 'Transporte de tubos de aço com acondicionamento que preserva a integridade da carga.',
    long: 'Movimentação de tubos de aço com amarração e acondicionamento apropriados, evitando avarias e mantendo o padrão de qualidade da THV.',
    highlights: ['Tubos de aço', 'Amarração dedicada', 'Manuseio seguro'],
  },
  {
    id: 'tubos-concreto',
    icon: 'Disc3',
    accent: 'cyan',
    subtitle: 'Infraestrutura',
    title: 'Tubos de Concreto',
    text: 'Movimentação de tubos de concreto para obras de infraestrutura e saneamento.',
    long: 'Transporte de tubos de concreto para a construção pesada e o saneamento, com o cuidado exigido por cargas de grande peso e volume.',
    highlights: ['Tubos de concreto', 'Obras de infraestrutura', 'Saneamento'],
  },
  {
    id: 'insumos',
    icon: 'Boxes',
    accent: 'blue',
    subtitle: 'Cadeia siderúrgica',
    title: 'Insumos',
    text: 'Insumos industriais para a cadeia siderúrgica, em cargas completas ou fracionadas controladas.',
    long: 'Transporte de insumos para a indústria siderúrgica, disponível em cargas completas e fracionadas controladas conforme a necessidade da operação.',
    highlights: ['Insumos industriais', 'Carga completa', 'Fracionada controlada'],
  },
  {
    id: 'siderurgicos-geral',
    icon: 'Factory',
    accent: 'cyan',
    subtitle: 'Especialização',
    title: 'Produtos Siderúrgicos em Geral',
    text: 'Ampla gama de produtos siderúrgicos, com a especialização de quem move aço desde 1987.',
    long: 'A THV transporta produtos siderúrgicos em geral, reunindo quase quatro décadas de especialização na cadeia do aço em cargas completas e fracionadas controladas.',
    highlights: ['Produtos siderúrgicos', 'Cargas completas', 'Fracionadas controladas'],
  },
];

export default servicos;
