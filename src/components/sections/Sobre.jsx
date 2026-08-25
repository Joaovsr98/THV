import { ShieldCheck, Timer, Globe2 } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { paisesAtendidos } from '../../data/oficinas.js';
import styles from './Sobre.module.css';

const icons = { ShieldCheck, Timer, Globe2 };

export function Sobre() {
  const pt = useContent();
  const { about } = pt;

  return (
    <section id="empresa" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text} data-reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className={styles.title}>{about.title}</h2>
            <p className={styles.lead}>{about.lead}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}

            <div className={styles.countries}>
              <span className={styles.countriesLabel}>{pt.brand.tagline}</span>
              <div className={styles.flags}>
                {paisesAtendidos.map((c) => {
                  const nome = pt.offices.countries[c.id] || c.nome;
                  return (
                    <span key={c.id} className={styles.flag} title={nome}>
                      <span className={styles.flagEmoji}>{c.flag}</span>
                      {nome}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.values}>
            {about.values.map((v, i) => {
              const Icon = icons[v.icon];
              return (
                <article
                  key={v.icon}
                  className={styles.value}
                  data-reveal
                  data-reveal-delay={i + 1}
                >
                  <span className={styles.valueIcon}>
                    {Icon && <Icon size={26} strokeWidth={2} />}
                  </span>
                  <div>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueText}>{v.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
