import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLang, detectLang } from '../../i18n/LanguageContext.jsx';
import styles from './LanguageGate.module.css';
import logoUrl from '../../assets/logo/mondel-group.webp';

/* ---------------------------------------------------------------------
   LANGUAGE GATE — primeira visita: o visitante escolhe o idioma.

   Some para sempre depois da escolha (localStorage, via setLang) e o
   seletor do header segue funcionando normalmente. O conteúdo é trilíngue
   de propósito: quem ainda não escolheu não tem um idioma "certo".
   --------------------------------------------------------------------- */

const OPTIONS = [
  { code: 'pt', label: 'PT', name: 'Português', aria: 'Navegar em português' },
  { code: 'es', label: 'ES', name: 'Español', aria: 'Navegar en español' },
  { code: 'en', label: 'EN', name: 'English', aria: 'Browse in English' },
];

export function LanguageGate() {
  const { setLang, chosen } = useLang();
  const cardRef = useRef(null);
  const suggested = detectLang();

  // Trava o scroll do body enquanto o gate está aberto.
  useEffect(() => {
    if (chosen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [chosen]);

  // Foco inicial no card + prende o Tab dentro dele (não há como fechar
  // sem escolher, então o resto da página não deve receber foco).
  useEffect(() => {
    if (chosen) return undefined;
    const card = cardRef.current;
    card?.querySelector('button')?.focus();

    const onKeyDown = (e) => {
      if (e.key !== 'Tab' || !card) return;
      const items = card.querySelectorAll('button');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [chosen]);

  if (chosen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="langGateTitle">
      <div className={styles.card} ref={cardRef}>
        <img
          src={logoUrl}
          alt="Mondel Group"
          className={styles.logo}
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <p className={styles.eyebrow}>Transporte internacional · Cone Sul</p>
        {/* Trilíngue e simétrico: quem ainda não escolheu não tem idioma "certo". */}
        <h2 className={styles.title} id="langGateTitle">
          Escolha seu idioma
          <br />
          Elija su idioma
          <br />
          Choose your language
        </h2>

        <div className={styles.options}>
          {OPTIONS.map((o) => (
            <button
              key={o.code}
              type="button"
              className={`${styles.option} ${o.code === suggested ? styles.suggested : ''}`}
              onClick={() => setLang(o.code)}
              aria-label={o.aria}
            >
              <span className={styles.code}>{o.label}</span>
              <span className={styles.name}>{o.name}</span>
              <ArrowRight size={17} className={styles.arrow} aria-hidden="true" />
            </button>
          ))}
        </div>

        <p className={styles.foot}>
          Você pode trocar quando quiser · Puede cambiarlo cuando quiera · You can change it anytime
        </p>
      </div>
    </div>
  );
}

export default LanguageGate;
