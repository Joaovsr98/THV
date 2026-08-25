import { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { getIcon } from '../../utils/icons.js';
import styles from './ServiceModal.module.css';

/**
 * Modal premium de detalhes do serviço (ficha técnica de carga).
 * Recebe um "service" da data/servicos.js.
 */
export function ServiceModal({ service, onClose, onQuote }) {
  useEffect(() => {
    if (!service) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = getIcon(service.icon);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={`${styles.modal} ${styles[service.accent]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          <X size={20} strokeWidth={2.2} />
        </button>

        <span className={styles.iconWrap}>
          <Icon size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className={styles.category}>{service.subtitle}</span>
        <h3 className={styles.title} id="service-modal-title">
          {service.title}
        </h3>
        <p className={styles.text}>{service.long || service.text}</p>

        {service.highlights && (
          <ul className={styles.list}>
            {service.highlights.map((h) => (
              <li key={h}>
                <Check size={15} strokeWidth={2.6} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <button type="button" className={styles.cta} onClick={() => onQuote(service.title)}>
          Solicitar cotação
          <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ServiceModal;
