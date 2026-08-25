import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useScrolled } from '../../hooks/useMediaQuery.js';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import styles from './Header.module.css';

/* ---------------------------------------------------------------------
   HEADER — THV. Nav self-contained com as seções já publicadas. Novos
   itens (Serviços já existe; Frota, Atuação/Mapa, Contato) entram aqui
   conforme cada seção é reconstruída.
   --------------------------------------------------------------------- */

const NAV = [
  { href: '#inicio', label: 'Início' },
  { href: '#historia', label: 'História' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Logo variant={scrolled ? 'dark' : 'light'} />

        <nav className={styles.navDesktop} aria-label="Menu principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#cotacao" variant="primary" size="md" icon={FileText}>
            Solicitar cotação
          </Button>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}>
        <nav className={styles.navMobile} aria-label="Menu">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileLink} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#cotacao" variant="primary" size="lg" icon={FileText} onClick={close}>
          Solicitar cotação
        </Button>
      </div>
      {open && <button className={styles.overlay} aria-hidden="true" tabIndex={-1} onClick={close} />}
    </header>
  );
}

export default Header;
