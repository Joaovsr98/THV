import styles from './Logo.module.css';
import logoUrl from '../../assets/logo/thv-oficial.png';

/* ---------------------------------------------------------------------
   LOGO — marca oficial da THV.
   O arquivo é colorido (azul + ciano) sobre transparente, então fica
   num selo branco para garantir contraste tanto no Hero escuro quanto
   no header claro (com scroll). Para trocar por uma versão em maior
   resolução, basta substituir src/assets/logo/thv-oficial.png.
   --------------------------------------------------------------------- */

export function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`${styles.logo} ${className}`} aria-label="THV Transportes — início">
      <img src={logoUrl} alt="THV Transportes" className={styles.img} />
    </a>
  );
}

export default Logo;
