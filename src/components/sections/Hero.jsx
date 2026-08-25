import { FileText, MessageCircle } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { whatsappLink } from '../../utils/contactLinks.js';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import Button from '../ui/Button.jsx';
import styles from './Hero.module.css';

export function Hero() {
  const pt = useContent();
  const { hero } = pt;
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <section id="inicio" className={styles.hero}>
      {/* Fundo: foto dos Andes (marca d'água) + navy + cartografia + linha-rota da marca */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.photo} />
        <div className={styles.photoScrim} />

        <svg className={styles.map} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g className={styles.contours}>
            <path d="M-50 240 C 260 180, 520 300, 820 220 S 1300 120, 1500 210" />
            <path d="M-50 350 C 300 300, 560 420, 900 320 S 1320 240, 1500 320" />
            <path d="M-50 480 C 320 440, 620 560, 980 440 S 1340 380, 1500 450" />
            <path d="M-50 630 C 300 600, 640 700, 1020 600 S 1360 560, 1500 620" />
          </g>
          {/* Rota logística internacional — nasce atrás do conteúdo e sobe ao canto superior direito */}
          <path
            id="heroRoute"
            className={styles.route}
            d="M 700 744 C 872 694, 1000 610, 1132 520 C 1268 428, 1356 350, 1476 244"
          />

          {/* Brilho no ponto de destino (chegada do caminhão) */}
          <circle className={styles.destGlow} cx="1476" cy="244" r="9" />

          {/* Pontos da rota — pulso discreto */}
          <g className={styles.points}>
            <circle cx="700" cy="744" r="4" />
            <circle cx="1132" cy="520" r="5" />
            <circle cx="1476" cy="244" r="4.5" />
          </g>

          {/* Caminhão percorrendo a rota em intervalos */}
          <g className={styles.truck} transform={reduce ? 'translate(700 744)' : undefined}>
            <g className={styles.truckShape}>
              <rect className={styles.truckBox} x="-9" y="-4" width="12" height="8" rx="1.5" />
              <rect className={styles.truckCab} x="3" y="-3" width="6" height="7" rx="1" />
              <circle className={styles.truckWheel} cx="-5" cy="5" r="1.6" />
              <circle className={styles.truckWheel} cx="5.5" cy="5" r="1.6" />
            </g>
            {!reduce && (
              <>
                <animateMotion
                  dur="18s"
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints="0;1;1"
                  keyTimes="0;0.62;1"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0 0 1 1"
                >
                  <mpath href="#heroRoute" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  dur="18s"
                  repeatCount="indefinite"
                  keyTimes="0;0.02;0.62;0.68;0.73;1"
                  values="0;1;1;1;0;0"
                  calcMode="linear"
                />
              </>
            )}
          </g>
        </svg>
        <div className={styles.vignette} />
      </div>

      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>

        <div className={styles.ctas}>
          <Button href="#cotacao" variant="primary" size="lg" icon={FileText}>
            {hero.ctaPrimary}
          </Button>
          <Button
            href={whatsappLink(pt.whatsappFloat.message)}
            variant="ghost"
            size="lg"
            icon={MessageCircle}
            external
          >
            {hero.ctaSecondary}
          </Button>
        </div>

        <dl className={styles.stats}>
          {hero.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#travessia" className={styles.scroll} aria-label={pt.ui.scrollAria}>
        <span className={styles.mouse} aria-hidden="true">
          <span className={styles.wheel} />
        </span>
      </a>
    </section>
  );
}

export default Hero;
