/* =====================================================================
   PAÍSES E CIDADES ATENDIDAS (Cone Sul)
   Base para o seletor dependente país → cidade da Cotação.
   Nomes por idioma (pt/es); onde a grafia é igual, repete-se o valor.
   Editável: acrescente/remova cidades conforme as praças da Mondel.
   ===================================================================== */

export const paisesCidades = [
  {
    code: 'BR',
    nome: { pt: 'Brasil', es: 'Brasil' },
    cidades: {
      pt: [
        'São Paulo',
        'Santos',
        'Campinas',
        'Curitiba',
        'Porto Alegre',
        'Rio de Janeiro',
        'Uberlândia',
        'Foz do Iguaçu',
      ],
      es: [
        'São Paulo',
        'Santos',
        'Campinas',
        'Curitiba',
        'Porto Alegre',
        'Río de Janeiro',
        'Uberlândia',
        'Foz do Iguaçu',
      ],
    },
  },
  {
    code: 'AR',
    nome: { pt: 'Argentina', es: 'Argentina' },
    cidades: {
      pt: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'],
      es: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'],
    },
  },
  {
    code: 'UY',
    nome: { pt: 'Uruguai', es: 'Uruguay' },
    cidades: {
      pt: ['Montevidéu', 'Colonia del Sacramento', 'Paysandú', 'Rivera'],
      es: ['Montevideo', 'Colonia del Sacramento', 'Paysandú', 'Rivera'],
    },
  },
  {
    code: 'PY',
    nome: { pt: 'Paraguai', es: 'Paraguay' },
    cidades: {
      pt: ['Assunção', 'Ciudad del Este', 'Encarnación'],
      es: ['Asunción', 'Ciudad del Este', 'Encarnación'],
    },
  },
  {
    code: 'CL',
    nome: { pt: 'Chile', es: 'Chile' },
    cidades: {
      pt: ['Santiago', 'Valparaíso', 'San Antonio', 'Concepción', 'Antofagasta', 'Iquique'],
      es: ['Santiago', 'Valparaíso', 'San Antonio', 'Concepción', 'Antofagasta', 'Iquique'],
    },
  },
];

/** Valor sentinela para "Outra cidade" (campo livre). */
export const OUTRA_CIDADE = '__outra__';

/** Retorna as cidades de um país (pelo nome exibido em qualquer idioma); [] se não encontrado. */
export function cidadesDoPais(nome, lang = 'pt') {
  const p = paisesCidades.find((x) => Object.values(x.nome).includes(nome));
  return p ? p.cidades[lang] || p.cidades.pt : [];
}

export default paisesCidades;
