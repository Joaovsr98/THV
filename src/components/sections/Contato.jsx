import { Mail, ArrowRight } from 'lucide-react';
import styles from './Contato.module.css';

/* ---------------------------------------------------------------------
   CONTATO — THV. Só o canal confirmado na auditoria (e-mail). Telefone,
   WhatsApp, endereço e redes entram quando confirmados com a empresa.
   --------------------------------------------------------------------- */

const EMAIL = 'thvmtz@thv.com.br';

export function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Contato
          </span>
          <h2 className={styles.title}>Fale com a THV</h2>
          <p className={styles.lead}>
            Estamos prontos para atender a sua operação. Envie sua mensagem e retornaremos o mais
            breve possível.
          </p>
        </div>

        <a className={styles.mailCard} href={`mailto:${EMAIL}`} data-reveal>
          <span className={styles.mailIcon}>
            <Mail size={22} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className={styles.mailBody}>
            <span className={styles.mailLabel}>E-mail</span>
            <span className={styles.mailValue}>{EMAIL}</span>
          </span>
          <ArrowRight size={20} strokeWidth={2.2} className={styles.mailArrow} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Contato;
