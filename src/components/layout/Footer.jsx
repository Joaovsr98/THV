import { Mail } from 'lucide-react';
import { servicos } from '../../data/servicos.js';
import Logo from '../ui/Logo.jsx';
import { whatsappLink } from '../../utils/contactLinks.js';
import styles from './Footer.module.css';

// WhatsApp da VN Bueno Digital, que desenvolveu o site.
const INV_DEVS_WHATSAPP = '5511925272694';

/* ---------------------------------------------------------------------
   FOOTER — THV. Self-contained, só com fatos confirmados na auditoria
   (nome, e-mail real, serviços, navegação). Telefone, WhatsApp, redes
   sociais e endereço entram quando confirmados com a empresa.
   --------------------------------------------------------------------- */

const NAV = [
  { href: '#inicio', label: 'Início' },
  { href: '#historia', label: 'História' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#cotacao', label: 'Cotação' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p className={styles.about}>
            Transporte rodoviário de cargas siderúrgicas para a indústria brasileira desde 1987.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Serviços</h4>
          <ul>
            {servicos.map((s) => (
              <li key={s.id}>
                <a href="#servicos">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contato</h4>
          <ul className={styles.contactList}>
            <li>
              <a href="mailto:thvmtz@thv.com.br">
                <Mail size={16} /> thvmtz@thv.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={`container ${styles.devCta}`}>
          Gostou deste site?{' '}
          <a
            href={whatsappLink('Olá! Vi o site da THV Transportes feito pela VN Bueno Digital e quero saber mais.', INV_DEVS_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a VN Bueno Digital no WhatsApp
          </a>
        </p>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {year} THV Transportes. Todos os direitos reservados.</p>
        </div>
        <div className={styles.madeByRow}>
          <a
            href="https://www.instagram.com/vnbuenodigital/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dev}
            aria-label={"Site feito por VN Bueno Digital (abre o Instagram @vnbuenodigital)"}
          >
            <img src="/vn-bueno-digital.png" alt="" width="56" height="56" loading="lazy" />
            <span className={styles.devText}>
              <span className={styles.devLabel}>Site feito por</span>
              <span className={styles.devName}>VN Bueno Digital</span>
              <span className={styles.devSlogan}>Seu presente do futuro.</span>
              <span className={styles.devSub}>@vnbuenodigital no Instagram →</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
