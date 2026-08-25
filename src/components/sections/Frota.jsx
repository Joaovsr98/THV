import { Truck, Anchor, Route, PackageCheck } from 'lucide-react';
import styles from './Frota.module.css';

/* ---------------------------------------------------------------------
   FROTA & OPERAÇÃO — THV.
   Sem fotos oficiais ainda: usamos uma cena industrial em SVG (carreta
   com bobinas de aço) como prova visual, no lugar de foto genérica.
   Atributos factuais da operação — nenhum número de frota inventado.
   O bloco visual está pronto para receber fotografia real depois.
   --------------------------------------------------------------------- */

const ATRIBUTOS = [
  {
    icon: Truck,
    title: 'Frota própria',
    text: 'Veículos dedicados ao transporte de cargas siderúrgicas.',
  },
  {
    icon: Anchor,
    title: 'Estiva e amarração',
    text: 'Carregamento planejado e amarração adequada a cada produto.',
  },
  {
    icon: Route,
    title: 'Do carregamento à entrega',
    text: 'Operação controlada de ponta a ponta, com o cuidado que o aço exige.',
  },
  {
    icon: PackageCheck,
    title: 'Completas e fracionadas',
    text: 'Cargas completas e fracionadas controladas, conforme a operação.',
  },
];

export function Frota() {
  return (
    <section id="frota" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* ---------- Cena industrial (SVG) ---------- */}
        <figure className={styles.scene} data-reveal>
          <svg viewBox="0 0 520 300" className={styles.svg} role="img" aria-label="Carreta transportando bobinas de aço">
            <line x1="0" y1="250" x2="520" y2="250" className={styles.ground} />

            {/* Reboque / prancha */}
            <rect x="40" y="196" width="330" height="14" rx="2" className={styles.bed} />
            {/* Cavalo mecânico */}
            <path d="M372 210 L372 150 L432 150 L470 186 L470 210 Z" className={styles.cab} />
            <rect x="432" y="158" width="30" height="24" rx="2" className={styles.window} />

            {/* Bobinas de aço estivadas */}
            <g className={styles.coil}>
              <circle cx="120" cy="168" r="30" />
              <circle cx="120" cy="168" r="18" className={styles.coilInner} />
              <circle cx="120" cy="168" r="6" className={styles.coilCore} />
            </g>
            <g className={styles.coil}>
              <circle cx="210" cy="168" r="30" />
              <circle cx="210" cy="168" r="18" className={styles.coilInner} />
              <circle cx="210" cy="168" r="6" className={styles.coilCore} />
            </g>
            <g className={styles.coil}>
              <circle cx="300" cy="168" r="30" />
              <circle cx="300" cy="168" r="18" className={styles.coilInner} />
              <circle cx="300" cy="168" r="6" className={styles.coilCore} />
            </g>

            {/* Amarração (cintas) */}
            <path d="M90 198 L100 138 M150 198 L140 138" className={styles.strap} />
            <path d="M180 198 L190 138 M240 198 L230 138" className={styles.strap} />
            <path d="M270 198 L280 138 M330 198 L320 138" className={styles.strap} />

            {/* Rodas */}
            <g className={styles.wheels}>
              <circle cx="110" cy="250" r="22" />
              <circle cx="170" cy="250" r="22" />
              <circle cx="300" cy="250" r="22" />
              <circle cx="430" cy="250" r="22" />
            </g>
            <g className={styles.hubs}>
              <circle cx="110" cy="250" r="7" />
              <circle cx="170" cy="250" r="7" />
              <circle cx="300" cy="250" r="7" />
              <circle cx="430" cy="250" r="7" />
            </g>
          </svg>
          <figcaption className={styles.caption}>
            <i className={styles.dot} aria-hidden="true" />
            Carga siderúrgica estivada
          </figcaption>
        </figure>

        {/* ---------- Conteúdo ---------- */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Operação
          </span>
          <h2 className={styles.title}>Frota própria. Operação controlada.</h2>
          <p className={styles.lead}>
            Do pátio à entrega, a THV opera com frota própria e equipe dedicada ao transporte de
            cargas siderúrgicas.
          </p>

          <ul className={styles.attrs}>
            {ATRIBUTOS.map((a) => {
              const Icon = a.icon;
              return (
                <li key={a.title} className={styles.attr}>
                  <span className={styles.attrIcon}>
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={styles.attrTitle}>{a.title}</h3>
                    <p className={styles.attrText}>{a.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Frota;
