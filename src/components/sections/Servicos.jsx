import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../../utils/icons.js';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { servicos } from '../../data/servicos.js';
import { prefillCargo } from '../../utils/quotePrefill.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import ServiceModal from './ServiceModal.jsx';
import styles from './Servicos.module.css';

export function Servicos() {
  const pt = useContent();
  const [modal, setModal] = useState(null);

  const cargoFor = (s) => (s.cargoIndex != null ? pt.quote.cargoOptions[s.cargoIndex] : '');

  const goToQuote = (cargo) => {
    prefillCargo(cargo);
    window.location.hash = '#cotacao';
  };

  return (
    <section id="servicos" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={pt.services.eyebrow}
          title={pt.services.title}
          subtitle={pt.services.subtitle}
          align="center"
        />

        <div className={styles.grid}>
          {servicos.map((s, i) => {
            const Icon = getIcon(s.icon);
            const item = pt.services.items[s.id];
            const cargo = cargoFor(s);
            return (
              <article
                key={s.id}
                className={`${styles.card} ${styles[s.accent]}`}
                data-reveal
                data-reveal-delay={(i % 3) + 1}
                onClick={() => goToQuote(cargo)}
              >
                <span className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className={styles.subtitle}>{item.subtitle}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>

                <div className={styles.actions}>
                  <a
                    href="#cotacao"
                    className={styles.cta}
                    onClick={(e) => {
                      e.stopPropagation();
                      prefillCargo(cargo);
                    }}
                  >
                    {pt.ui.requestQuote}
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className={styles.detail}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModal({ ...s, ...item, cargo });
                    }}
                  >
                    {pt.ui.viewDetails}
                    <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ServiceModal
        service={modal}
        onClose={() => setModal(null)}
        onQuote={(cargo) => {
          setModal(null);
          goToQuote(cargo);
        }}
      />
    </section>
  );
}

export default Servicos;
