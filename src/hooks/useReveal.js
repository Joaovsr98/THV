import { useEffect } from 'react';

/**
 * Ativa as animações [data-reveal] via Intersection Observer.
 * Cada elemento com o atributo data-reveal recebe data-reveal="in"
 * quando entra na viewport, disparando a transição definida no CSS.
 *
 * `dep` (opcional): valor que, ao mudar, re-observa os elementos —
 * necessário quando partes da página são recriadas (ex.: troca de idioma).
 */
export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    // Respeita a preferência de movimento reduzido.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach((el) => el.setAttribute('data-reveal', 'in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => {
      // Elementos já revelados permanecem visíveis; observa só os pendentes.
      if (el.getAttribute('data-reveal') !== 'in') observer.observe(el);
    });
    return () => observer.disconnect();
  }, [dep]);
}

export default useReveal;
