import styles from './Logo.module.css';

/* ---------------------------------------------------------------------
   LOGO — wordmark provisório da THV (texto).
   Enquanto não recebemos o logo oficial em alta, usamos um wordmark
   tipográfico industrial: "THV" pesado + "TRANSPORTES" em mono, com o
   tick de brasa (elemento proprietário). Fácil de trocar depois.

   variant="light" → sobre fundos escuros (Hero, rodapé)
   variant="dark"  → sobre fundos claros (header com scroll)
   --------------------------------------------------------------------- */

export function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';
  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${isLight ? styles.light : ''} ${className}`}
      aria-label="THV Transportes — início"
    >
      <span className={styles.mark}>
        THV
        <i className={styles.tick} aria-hidden="true" />
      </span>
      <span className={styles.sub}>Transportes</span>
    </a>
  );
}

export default Logo;
