/* =====================================================================
   CONSTRUTORES DE LINKS DE CONTATO
   Centraliza a montagem de wa.me, tel:, mailto: e Google Maps.
   ===================================================================== */

import { empresa } from '../data/empresa.js';

/** Link do WhatsApp com mensagem opcional. Aceita outro número (só dígitos); usa o do Brasil por padrão. */
export function whatsappLink(message = '', raw = empresa.whatsappRaw) {
  const base = `https://wa.me/${raw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link de telefone clicável. Aceita um número (só dígitos); usa o do Brasil por padrão. */
export function telLink(raw = empresa.telRaw) {
  return `tel:+${raw}`;
}

/** Link de e-mail clicável com assunto opcional. */
export function mailLink(subject = 'Contato pelo site') {
  return `mailto:${empresa.email}?subject=${encodeURIComponent(subject)}`;
}

/** URL de embed do Google Maps (sem necessidade de API key). */
export function mapEmbedUrl() {
  return `https://www.google.com/maps?q=${empresa.mapaQuery}&z=15&output=embed`;
}

/** Link para abrir o endereço no Google Maps em nova aba. */
export function mapOpenUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${empresa.mapaQuery}`;
}

/**
 * Monta a mensagem de cotação a partir dos dados do formulário
 * e devolve o link de WhatsApp pronto.
 */
const DEFAULT_MSG = {
  header: '*Nova solicitação de cotação — Mondel Group*',
  name: 'Nome',
  company: 'Empresa',
  phone: 'Telefone',
  email: 'E-mail',
  origin: 'Origem',
  destination: 'Destino',
  cargoType: 'Tipo de carga',
  weight: 'Peso estimado',
  urgency: 'Urgência',
  details: 'Detalhes',
};

export function buildQuoteWhatsapp(form, labels) {
  const L = labels || DEFAULT_MSG;
  const origem = [form.originCountry, form.originCity].filter(Boolean).join(' / ') || '-';
  const destino = [form.destCountry, form.destCity].filter(Boolean).join(' / ') || '-';
  const linhas = [
    L.header,
    '',
    `*${L.name}:* ${form.name || '-'}`,
    `*${L.company}:* ${form.company || '-'}`,
    `*${L.phone}:* ${form.phone || '-'}`,
    `*${L.email}:* ${form.email || '-'}`,
    '',
    `*${L.origin}:* ${origem}`,
    `*${L.destination}:* ${destino}`,
    `*${L.cargoType}:* ${form.cargoType || '-'}`,
    `*${L.weight}:* ${form.weight ? `${form.weight} t` : '-'}`,
    `*${L.urgency}:* ${form.urgency || '-'}`,
    '',
    `*${L.details}:* ${form.message || '-'}`,
  ];
  return whatsappLink(linhas.join('\n'));
}
