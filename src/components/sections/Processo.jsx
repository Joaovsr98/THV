import { useContent } from '../../i18n/LanguageContext.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Processo.module.css';

export function Processo() {
  const pt = useContent();
  const { process } = pt;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow={process.eyebrow} title={process.title} align="center" />

        <ol className={styles.steps}>
          {process.steps.map((step, i) => (
            <li key={i} className={styles.step} data-reveal data-reveal-delay={i + 1}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Processo;
