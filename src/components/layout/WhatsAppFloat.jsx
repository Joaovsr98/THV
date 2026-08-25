import { MessageCircle } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { whatsappLink } from '../../utils/contactLinks.js';
import styles from './WhatsAppFloat.module.css';

export function WhatsAppFloat() {
  const pt = useContent();
  return (
    <a
      className={styles.float}
      href={whatsappLink(pt.whatsappFloat.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={pt.ui.whatsapp}
    >
      <span className={styles.ring} aria-hidden="true" />
      <MessageCircle size={28} strokeWidth={2.2} className={styles.icon} />
      <span className={styles.tooltip}>{pt.whatsappFloat.label}</span>
    </a>
  );
}

export default WhatsAppFloat;
