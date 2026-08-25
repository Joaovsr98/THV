import { Mail } from 'lucide-react';
import { servicos } from '../../data/servicos.js';
import Logo from '../ui/Logo.jsx';
import styles from './Footer.module.css';

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
        <div className={`container ${styles.bottomInner}`}>
          <p>© {year} THV Transportes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
