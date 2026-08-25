import { useState } from 'react';
import { Image as ImageIcon, Expand } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { galeria } from '../../data/galeria.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import Lightbox from '../ui/Lightbox.jsx';
import styles from './Galeria.module.css';

export function Galeria() {
  const pt = useContent();
  const [current, setCurrent] = useState(null);

  // Só as fotos reais entram no lightbox (placeholders não são clicáveis).
  const shots = galeria
    .filter((t) => t.image)
    .map((t) => ({ id: t.id, src: t.image, label: pt.gallery.tiles[t.id] || '' }));
  const shotIndex = (id) => shots.findIndex((s) => s.id === id);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={pt.gallery.eyebrow}
          title={pt.gallery.title}
          subtitle={pt.gallery.subtitle}
        />

        <div className={styles.mosaic}>
          {galeria.map((t, i) => {
            const label = pt.gallery.tiles[t.id] || '';
            return (
              <figure
                key={t.id}
                className={`${styles.tile} ${t.span ? styles[t.span] : ''}`}
                data-reveal
                data-reveal-delay={(i % 4) + 1}
              >
                {t.image ? (
                  <>
                    <img src={t.image} alt={label} loading="lazy" className={styles.img} />
                    <span className={styles.grade} aria-hidden="true" />
                    <button
                      type="button"
                      className={styles.openBtn}
                      onClick={() => setCurrent(shotIndex(t.id))}
                      aria-label={`${pt.ui.openImage}: ${label}`}
                    >
                      <span className={styles.expandIcon} aria-hidden="true">
                        <Expand size={18} strokeWidth={2} />
                      </span>
                    </button>
                  </>
                ) : (
                  <span className={styles.placeholder} aria-hidden="true">
                    <ImageIcon size={26} strokeWidth={1.5} />
                    <span className={styles.tag}>{pt.ui.editable}</span>
                  </span>
                )}
                <figcaption className={styles.caption}>{label}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <Lightbox items={shots} index={current} onClose={() => setCurrent(null)} onChange={setCurrent} />
    </section>
  );
}

export default Galeria;
