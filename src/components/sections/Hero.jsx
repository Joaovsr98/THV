import { FileText, ArrowRight } from 'lucide-react';
import Button from '../ui/Button.jsx';
import styles from './Hero.module.css';

/* ---------------------------------------------------------------------
   HERO — THV Transportes
   Território: aço + força + precisão. Sem cartografia, sem rota, sem Andes.
   Elementos proprietários: bobina de aço (motivo industrial) + a
   "linha de carga" (régua de engenharia) que nasce aqui e segue no site.
   Copy factual: siderúrgica, desde 1987. Nenhum número inventado.
   --------------------------------------------------------------------- */

// Bobina de aço vista de topo — anéis concêntricos recortados à direita.
const COIL_RINGS = Array.from({ length: 15 }, (_, i) => 300 - i * 19);

// Régua da "linha de carga": marca curta a cada 30px, longa (com nível) a cada 180px.
const LOADLINE_TICKS = Array.from({ length: 49 }, (_, i) => i * 30);

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.grain} />

        {/* Motivo: bobina de aço (end-on), grande e recortada no canto direito */}
        <svg className={styles.coil} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
          <g className={styles.coilRings}>
            {COIL_RINGS.map((r, i) => (
              <circle key={r} cx="470" cy="300" r={r} className={i === 4 ? styles.coilEmber : ''} />
            ))}
          </g>
          <circle cx="470" cy="300" r="10" className={styles.coilCore} />
        </svg>

        <div className={styles.vignette} />
      </div>

      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>
          <i className={styles.tick} aria-hidden="true" />
          Transporte rodoviário de cargas siderúrgicas · Desde 1987
        </span>

        <h1 className={styles.title}>
          Força que move
          <br />a indústria.
        </h1>

        <p className={styles.subtitle}>
          Especialistas no transporte de cargas siderúrgicas, como aços, tubos e insumos, para a
          indústria brasileira desde 1987.
        </p>

        <div className={styles.ctas}>
          <Button href="#cotacao" variant="primary" size="lg" icon={FileText}>
            Solicitar cotação
          </Button>
          <Button href="#empresa" variant="ghost" size="lg" icon={ArrowRight}>
            Conheça a THV
          </Button>
        </div>

        {/* Faixa factual — só fatos confirmados na auditoria (nada de número inventado) */}
        <ul className={styles.facts}>
          <li>
            <span className={styles.factValue}>1987</span>
            <span className={styles.factLabel}>Início das atividades</span>
          </li>
          <li>
            <span className={styles.factValue}>5</span>
            <span className={styles.factLabel}>Estados com presença</span>
          </li>
          <li>
            <span className={styles.factValue}>Siderúrgica</span>
            <span className={styles.factLabel}>Carga especializada</span>
          </li>
        </ul>
      </div>

      {/* Linha de carga — assinatura proprietária da THV, nasce no Hero */}
      <div className={styles.loadline} aria-hidden="true">
        <svg className={styles.loadlineSvg} viewBox="0 0 1440 44" preserveAspectRatio="none">
          <line x1="0" y1="30" x2="1440" y2="30" className={styles.loadlineBase} />
          {LOADLINE_TICKS.map((x) => {
            const major = x % 180 === 0;
            return (
              <line
                key={x}
                x1={x}
                x2={x}
                y1={major ? 14 : 22}
                y2="30"
                className={major ? styles.tickMajor : styles.tickMinor}
              />
            );
          })}
          {/* Marcador de brasa correndo sobre a régua */}
          <circle cx="252" cy="30" r="4" className={styles.loadlineEmber} />
        </svg>
        <span className={styles.loadlineLabel}>Linha de carga</span>
      </div>
    </section>
  );
}

export default Hero;
