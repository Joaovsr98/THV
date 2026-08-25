import { useContent } from '../../i18n/LanguageContext.jsx';
import styles from './Logo.module.css';
import logoUrl from '../../assets/logo/mondel-group.webp';

/* ---------------------------------------------------------------------
   LOGO — arquivo oficial (src/assets/logo/mondel-group.webp)

   variant="dark"  → logo colorida (uso sobre fundos claros)
   variant="light" → logo em branco monocromático (uso sobre fundos
                     escuros, como o topo do Hero e o rodapé), garantindo
                     leitura do wordmark "mondel".
   --------------------------------------------------------------------- */

export function Logo({ variant = 'dark', className = '' }) {
  const pt = useContent();
  const isLight = variant === 'light';

  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${isLight ? styles.light : ''} ${className}`}
      aria-label={pt.ui.homeAria}
    >
      <img src={logoUrl} alt="Mondel Group" className={styles.img} />
    </a>
  );
}

export default Logo;
