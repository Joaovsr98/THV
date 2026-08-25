import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './FAQ.module.css';

export function FAQ() {
  const pt = useContent();
  const faq = pt.faq.items;
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--tint">
      <div className="container">
        <div className={styles.wrap}>
          <SectionTitle eyebrow={pt.faq.eyebrow} title={pt.faq.title} align="center" />

          <div className={styles.list} data-reveal>
            {faq.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={idx} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.pergunta}</span>
                    <Plus className={styles.icon} size={22} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                  <div className={styles.answer} style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className={styles.answerInner}>
                      <p>{item.resposta}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
