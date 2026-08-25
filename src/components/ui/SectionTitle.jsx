import styles from './SectionTitle.module.css';

/**
 * Cabeçalho padrão de seção: eyebrow (rótulo), título e subtítulo.
 * align: 'left' | 'center'
 */
export function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <header
      className={`${styles.head} ${align === 'center' ? styles.center : ''} ${
        light ? styles.light : ''
      }`}
      data-reveal
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

export default SectionTitle;
