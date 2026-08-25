import { MessageCircle, Phone, Mail, Instagram, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { empresa } from '../../data/empresa.js';
import {
  whatsappLink,
  telLink,
  mailLink,
  mapEmbedUrl,
  mapOpenUrl,
} from '../../utils/contactLinks.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Contato.module.css';

export function Contato() {
  const pt = useContent();
  const { contact } = pt;

  const channels = [
    {
      icon: MessageCircle,
      label: contact.labels.whatsapp,
      value: empresa.whatsappDisplay,
      href: whatsappLink(pt.whatsappFloat.message),
      external: true,
      accent: 'whatsapp',
    },
    {
      icon: MessageCircle,
      label: contact.labels.whatsappAr,
      value: empresa.whatsappArDisplay,
      href: whatsappLink(pt.whatsappFloat.message, empresa.whatsappArRaw),
      external: true,
      accent: 'whatsapp',
    },
    {
      icon: Phone,
      label: contact.labels.phone,
      value: empresa.telDisplay,
      href: telLink(),
      accent: 'blue',
    },
    {
      icon: Phone,
      label: contact.labels.matrizPhone,
      value: empresa.matrizTelDisplay,
      href: telLink(empresa.matrizTelRaw),
      accent: 'blue',
    },
    {
      icon: Mail,
      label: contact.labels.email,
      value: empresa.email,
      href: mailLink('Cotação de transporte'),
      accent: 'red',
    },
    {
      icon: Instagram,
      label: contact.labels.instagram,
      value: empresa.instagramUser,
      href: empresa.instagramUrl,
      external: true,
      accent: 'blue',
    },
    {
      icon: Linkedin,
      label: contact.labels.linkedin,
      value: '/mondelgroup',
      href: empresa.linkedinUrl,
      external: true,
      accent: 'blue',
    },
    {
      icon: MapPin,
      label: contact.labels.address,
      value: empresa.enderecoPrincipal,
      href: mapOpenUrl(),
      external: true,
      accent: 'red',
    },
  ];

  return (
    <section id="contato" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className={styles.grid}>
          <div className={styles.channels}>
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.href}
                  className={`${styles.channel} ${styles[c.accent]}`}
                  data-reveal
                  data-reveal-delay={(i % 3) + 1}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.channelIcon}>
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className={styles.channelBody}>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelValue}>{c.value}</span>
                  </span>
                  <ExternalLink className={styles.ext} size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className={styles.mapWrap} data-reveal>
            <iframe
              className={styles.map}
              src={mapEmbedUrl()}
              title={contact.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={mapOpenUrl()}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.mapLink} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
