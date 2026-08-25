import { useContent } from '../../i18n/LanguageContext.jsx';
import { frota } from '../../data/frota.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Frota.module.css';

export function Frota() {
  const pt = useContent();

  // Só exibimos os tipos que já têm foto real (evita cards "vazios").
  const veiculos = frota.filter((v) => v.image);

  return (
    <section id="frota" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={pt.fleet.eyebrow}
          title={pt.fleet.title}
          subtitle={pt.fleet.subtitle}
        />

        <div className={styles.grid}>
          {veiculos.map((v, i) => {
            const item = pt.fleet.items[v.id] || {};
            return (
              <article
                key={v.id}
                className={styles.card}
                data-reveal
                data-reveal-delay={(i % 4) + 1}
              >
                <div className={styles.media}>
                  <img src={v.image} alt={item.nome} loading="lazy" className={styles.img} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{item.nome}</h3>
                  <p className={styles.specs}>{item.specs}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Frota;
