import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { useScrolled } from '../../hooks/useMediaQuery.js';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import styles from './Header.module.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const pt = useContent();

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

        <nav className={styles.navDesktop} aria-label={pt.ui.mainMenu}>
          {pt.nav.map((item) => (
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
          aria-label={open ? pt.ui.menuClose : pt.ui.menuOpen}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}>
        <nav className={styles.navMobile} aria-label={pt.ui.mobileMenu}>
          {pt.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileLink} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#cotacao" variant="primary" size="lg" icon={FileText} onClick={close}>
          {pt.hero.ctaPrimary}
        </Button>
      </div>
      {open && <button className={styles.overlay} aria-hidden="true" tabIndex={-1} onClick={close} />}
    </header>
  );
}

export default Header;
