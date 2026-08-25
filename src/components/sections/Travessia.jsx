import { ArrowDown, MapPin } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import styles from './Travessia.module.css';

/**
 * A TRAVESSIA — origem e diferencial da marca.
 * Conta a verdade única: matriz em Santiago (Chile), a travessia dos
 * Andes e as fronteiras do Cone Sul. Layout editorial assimétrico
 * (texto | arco-portal), sem grid de cards.
 */
export function Travessia() {
  const pt = useContent();
  const { travessia } = pt;

  return (
    <section id="travessia" className={styles.travessia}>
      <div className={styles.bg} aria-hidden="true">
        <svg className={styles.map} viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <g className={styles.contours}>
            <path d="M-50 180 C 320 120, 640 260, 1020 160 S 1360 90, 1500 170" />
            <path d="M-50 320 C 300 280, 640 400, 1020 300 S 1360 240, 1500 300" />
            <path d="M-50 470 C 320 440, 660 560, 1040 450 S 1360 400, 1500 460" />
          </g>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.text} data-reveal>
          <span className={styles.eyebrow}>{travessia.eyebrow}</span>
          <h2 className={styles.title}>{travessia.title}</h2>
          <p className={styles.body}>{travessia.body}</p>

          <div className={styles.meta}>
            <span className={styles.origin}>
              <MapPin size={15} strokeWidth={2} aria-hidden="true" />
              {travessia.origin}
            </span>
            <span className={styles.coords}>{travessia.coords}</span>
          </div>

          <a href="#empresa" className={styles.cta}>
            {travessia.cta}
            <ArrowDown size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>

        <figure className={styles.portal} data-reveal data-reveal-delay="2">
          <div className={styles.portalInner}>
            {/* Fallback cartográfico — aparece caso a foto ainda não exista */}
            <svg
              className={styles.portalMap}
              viewBox="0 0 400 560"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g className={styles.portalContours}>
                <path d="M-20 120 C 90 80, 200 160, 320 110 S 420 70, 470 120" />
                <path d="M-20 220 C 100 180, 210 260, 330 210 S 430 170, 470 220" />
                <path d="M-20 340 C 90 300, 210 380, 330 330 S 430 300, 470 350" />
                <path d="M-20 460 C 100 430, 220 500, 340 450 S 430 420, 470 470" />
              </g>
            </svg>

            {/* Foto real: frota Mondel cruzando os Andes */}
            <img
              className={styles.photo}
              src="/travessia/andes.webp"
              alt={travessia.imageAlt}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Tratamento cinematográfico: grade navy + escurecimento inferior */}
            <div className={styles.grade} aria-hidden="true" />

            <figcaption className={styles.portalLabel}>
              <span className={styles.coordTag}>
                {travessia.origin} · {travessia.coords}
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Travessia;
