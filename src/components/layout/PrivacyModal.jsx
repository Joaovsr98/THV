import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import styles from './PrivacyModal.module.css';

/**
 * Modal da Política de Privacidade (LGPD).
 * Conteúdo vem do bundle de idioma ativo (pt/es/en).
 */
export function PrivacyModal({ open, onClose }) {
  const pt = useContent();
  const privacy = pt.privacy;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label={pt.ui.close}>
          <X size={20} strokeWidth={2.2} />
        </button>

        <h3 className={styles.title} id="privacy-modal-title">
          {privacy.title}
        </h3>
        <p className={styles.updated}>{privacy.updated}</p>
        <p className={styles.intro}>{privacy.intro}</p>

        <div className={styles.sections}>
          {privacy.sections.map((s) => (
            <section key={s.heading} className={styles.block}>
              <h4 className={styles.heading}>{s.heading}</h4>
              <p className={styles.body}>{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
