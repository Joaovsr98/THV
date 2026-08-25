import { useState } from 'react';
import { MessageCircle, Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { empresa } from '../../data/empresa.js';
import { servicos } from '../../data/servicos.js';
import { whatsappLink, mailLink } from '../../utils/contactLinks.js';
import Logo from '../ui/Logo.jsx';
import PrivacyModal from './PrivacyModal.jsx';
import styles from './Footer.module.css';

export function Footer() {
  const pt = useContent();
  const year = new Date().getFullYear();
  const { footer } = pt;
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p className={styles.about}>{footer.about}</p>
          <div className={styles.social}>
            <a href={empresa.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={empresa.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={whatsappLink(pt.whatsappFloat.message)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{footer.columns.services}</h4>
          <ul>
            {servicos.map((s) => (
              <li key={s.id}>
                <a href="#servicos">{pt.services.items[s.id].title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{footer.columns.quickLinks}</h4>
          <ul>
            {pt.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#cotacao">{footer.quote}</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{footer.columns.contact}</h4>
          <ul className={styles.contactList}>
            <li>
              <a href={whatsappLink(pt.whatsappFloat.message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> {empresa.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={mailLink()}>
                <Mail size={16} /> {empresa.email}
              </a>
            </li>
            <li className={styles.addr}>
              <MapPin size={16} /> <span>{empresa.enderecoPrincipal}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {year} {empresa.razaoSocial}. {footer.rights}
          </p>
          <div className={styles.bottomLinks}>
            <button type="button" className={styles.privacyLink} onClick={() => setPrivacyOpen(true)}>
              {footer.privacy}
            </button>
            <span className={styles.dev}>{footer.developer}</span>
          </div>
        </div>
      </div>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}

export default Footer;
