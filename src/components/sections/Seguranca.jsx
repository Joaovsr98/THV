import { Radar, ShieldCheck, FileCheck2 } from 'lucide-react';
import styles from './Seguranca.module.css';

/* ---------------------------------------------------------------------
   SEGURANÇA & TECNOLOGIA — THV.
   Estética de centro de controle. Só fatos documentados na auditoria:
   monitoramento 24h, serviço de escolta e conhecimento eletrônico.
   Sem afirmar sistema/tecnologia atual específica (pode ter evoluído).
   --------------------------------------------------------------------- */

const PROVAS = [
  {
    id: '24h',
    icon: Radar,
    tag: '24 / 7',
    title: 'Monitoramento 24 horas',
    text: 'Acompanhamento contínuo da operação, do carregamento à entrega.',
  },
  {
    id: 'escolta',
    icon: ShieldCheck,
    tag: 'Proteção',
    title: 'Serviço de escolta',
    text: 'Escolta dedicada para as cargas que exigem proteção reforçada em rota.',
  },
  {
    id: 'ecte',
    icon: FileCheck2,
    tag: 'Documentação',
    title: 'Conhecimento eletrônico',
    text: 'Documentação eletrônica integrada, dando rastreabilidade a cada embarque.',
  },
];

export function Seguranca() {
  return (
    <section id="seguranca" className={styles.section}>
      <div className={styles.grid} aria-hidden="true" />

      <div className="container">
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Segurança &amp; Tecnologia
          </span>
          <h2 className={styles.title}>Sua carga acompanhada em toda a operação</h2>
          <p className={styles.subtitle}>
            Do pátio à entrega, cada etapa é controlada, para que o aço chegue com a mesma
            segurança com que saiu.
          </p>
        </header>

        {/* Trilha de monitoramento — a "linha de carga" como rastreamento */}
        <div className={styles.track} data-reveal>
          <span className={styles.status}>
            <i className={styles.pulse} aria-hidden="true" />
            Operação monitorada
          </span>
          <svg className={styles.trackSvg} viewBox="0 0 1200 24" preserveAspectRatio="none">
            <line x1="0" y1="12" x2="1200" y2="12" className={styles.trackBase} />
            {Array.from({ length: 41 }, (_, i) => i * 30).map((x) => (
              <line key={x} x1={x} x2={x} y1={x % 150 === 0 ? 4 : 8} y2="12" className={styles.trackTick} />
            ))}
            <circle cx="120" cy="12" r="4" className={styles.trackDot} />
          </svg>
        </div>

        <div className={styles.provas}>
          {PROVAS.map((p, i) => {
            const Icon = p.icon;
            return (
              <article key={p.id} className={styles.card} data-reveal data-reveal-delay={i + 1}>
                <span className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className={styles.tag}>{p.tag}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardText}>{p.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Seguranca;
