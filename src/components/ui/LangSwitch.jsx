import { useState, useRef, Fragment } from 'react';
import { useLang } from '../../i18n/LanguageContext.jsx';
import styles from './LangSwitch.module.css';

const LANGS = ['PT', 'ES', 'EN'];
const AVAILABLE = { PT: 'pt', ES: 'es', EN: 'en' };

/**
 * Seletor de idiomas — PT/ES/EN funcionais.
 * Sem bandeiras, texto em mono. Vermelho escasso (sublinhado do ativo).
 */
export function LangSwitch({ variant = 'light', className = '' }) {
  const { lang, setLang } = useLang();
  const [notice, setNotice] = useState(false);
  const timer = useRef();
  const active = lang.toUpperCase();
  const noticeText = lang === 'es' ? 'Versión en breve' : 'Versão em breve';

  const handleClick = (code) => {
    const target = AVAILABLE[code];
    if (target) {
      if (target !== lang) setLang(target);
      return;
    }
    setNotice(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(false), 2200);
  };

  return (
    <div
      className={`${styles.wrap} ${variant === 'light' ? styles.light : ''} ${className}`}
      role="group"
      aria-label="Idioma / Idioma"
    >
      {LANGS.map((code, i) => (
        <Fragment key={code}>
          {i > 0 && (
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className={`${styles.lang} ${code === active ? styles.active : ''}`}
            onClick={() => handleClick(code)}
            aria-current={code === active ? 'true' : undefined}
          >
            {code}
          </button>
        </Fragment>
      ))}

      <span
        className={`${styles.notice} ${notice ? styles.noticeShow : ''}`}
        role="status"
        aria-live="polite"
      >
        {notice ? noticeText : ''}
      </span>
    </div>
  );
}

export default LangSwitch;
