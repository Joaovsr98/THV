import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import pt from '../content/pt.js';
import es from '../content/es.js';
import en from '../content/en.js';

/* =====================================================================
   i18n — provedor de idioma.
   Idiomas disponíveis: pt (padrão), es e en.
   Persiste a escolha em localStorage e ajusta <html lang>.
   ===================================================================== */

const BUNDLES = { pt, es, en };
const STORAGE_KEY = 'mondel_lang';
const HTML_LANG = { pt: 'pt-BR', es: 'es', en: 'en' };

/** Idioma sugerido a partir do navegador — só serve para destacar uma opção. */
export function detectLang() {
  if (typeof navigator === 'undefined') return 'pt';
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    const base = String(tag || '').toLowerCase().slice(0, 2);
    if (BUNDLES[base]) return base;
  }
  return 'pt';
}

const LanguageContext = createContext({
  lang: 'pt',
  setLang: () => {},
  chosen: true,
  c: pt,
});

export function LanguageProvider({ children }) {
  // A escolha só existe se estiver no localStorage: sem isso não dá para
  // diferenciar "escolheu português" de "nunca escolheu nada".
  const [saved, setSaved] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const v = window.localStorage.getItem(STORAGE_KEY);
      return v && BUNDLES[v] ? v : null;
    } catch {
      return null;
    }
  });

  const lang = saved || 'pt';

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang] || 'pt-BR';
  }, [lang]);

  const setLang = useCallback((l) => {
    if (!BUNDLES[l]) return;
    setSaved(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage bloqueado: a escolha vale só nesta sessão */
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, chosen: saved !== null, c: BUNDLES[lang] || pt }),
    [lang, setLang, saved],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Retorna { lang, setLang, chosen }. */
export function useLang() {
  const { lang, setLang, chosen } = useContext(LanguageContext);
  return { lang, setLang, chosen };
}

/** Retorna o bundle de conteúdo do idioma ativo (mesma forma do pt.js). */
export function useContent() {
  return useContext(LanguageContext).c;
}

export default LanguageContext;
