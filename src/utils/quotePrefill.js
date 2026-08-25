/* =====================================================================
   PONTE SERVIÇO → COTAÇÃO
   Ligação leve e desacoplada entre os cards de Serviços e o formulário
   de Cotação: ao clicar num serviço, o tipo de carga é pré-selecionado.
   ===================================================================== */

const EVENT = 'mondel:prefill-cargo';

/** Dispara a pré-seleção do tipo de carga na Cotação. */
export function prefillCargo(cargo) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: cargo || '' }));
}

/** Assina o evento de pré-seleção. Retorna a função de limpeza. */
export function onPrefillCargo(handler) {
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
