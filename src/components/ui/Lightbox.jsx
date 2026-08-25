import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import styles from './Lightbox.module.css';

/**
 * Lightbox de galeria — imagem ampliada com navegação (setas, teclado, clique).
 * items: [{ src, label }]  ·  index: número da imagem atual  ·  onClose/onChange.
 */
export function Lightbox({ items, index, onClose, onChange }) {
  const pt = useContent();
  const open = index !== null && index !== undefined;
  const total = items.length;

  const go = useCallback(
    (dir) => onChange((index + dir + total) % total),
    [index, total, onChange],
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, go]);

  if (!open) return null;
  const item = items[index];

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={item.label}>
      <button type="button" className={styles.close} onClick={onClose} aria-label={pt.ui.close}>
        <X size={22} strokeWidth={2.2} />
      </button>

      {total > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          aria-label={pt.ui.prevImage}
        >
          <ChevronLeft size={30} strokeWidth={2.2} />
        </button>
      )}

      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.label} className={styles.img} />
        <figcaption className={styles.caption}>
          <span>{item.label}</span>
          {total > 1 && (
            <span className={styles.counter}>
              {index + 1} / {total}
            </span>
          )}
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          onClick={(e) => { e.stopPropagation(); go(1); }}
          aria-label={pt.ui.nextImage}
        >
          <ChevronRight size={30} strokeWidth={2.2} />
        </button>
      )}
    </div>
  );
}

export default Lightbox;
