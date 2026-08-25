import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import styles from './Timeline.module.css';

/* ---------------------------------------------------------------------
   TIMELINE — "Forjada ao longo do tempo" (substitui a Travessia).
   Barra de aço vertical que cresce conforme o scroll; cada marco acende
   na brasa ao ser alcançado. Só marcos documentados na auditoria —
   nenhum fato inventado depois de 2012. "HOJE" é só fechamento visual.
   --------------------------------------------------------------------- */

const MARCOS = [
  { ano: '1987', texto: 'Início das atividades, com uma pequena frota dedicada à Comercial Gerdau (SP) e à Cosigua (RJ).' },
  { ano: '1990', texto: 'Inauguração da filial no Rio de Janeiro.' },
  { ano: '1994', texto: 'Expansão para a Bahia e Pernambuco.' },
  { ano: '1998', texto: 'Incorporação da Transpains e entrada em Minas Gerais.' },
  { ano: '2000', texto: 'Conquista da certificação ISO 9002.' },
  { ano: '2002', texto: 'Implantação de três centros de distribuição de produtos siderúrgicos.' },
  { ano: '2005', texto: 'Garagem própria de 20.000 m² em Guarulhos para manutenção da frota.' },
  { ano: '2007', texto: 'Implantação do monitoramento 24 horas e do serviço de escolta.' },
  { ano: '2010', texto: 'Sistema interligado com conhecimento eletrônico.' },
  { ano: '2012', texto: 'Aquisição do centro de distribuição em Salvador.' },
  { ano: 'HOJE', texto: 'Uma operação siderúrgica presente em cinco estados brasileiros.', fim: true },
];

export function Timeline() {
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (reduce) {
      setActive(MARCOS.length - 1);
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.dataset.i);
            // Monotônico: a barra "forjada" não recua ao rolar de volta.
            setActive((prev) => (i > prev ? i : prev));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [reduce]);

  const fill = reduce ? 100 : ((active + 1) / MARCOS.length) * 100;

  return (
    <section id="historia" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Nossa história
          </span>
          <h2 className={styles.title}>Forjada ao longo do tempo</h2>
          <p className={styles.subtitle}>
            De uma pequena frota dedicada à Gerdau e à Cosigua, em 1987, a uma operação siderúrgica
            presente em cinco estados.
          </p>
        </header>

        <ol className={styles.track}>
          <div className={styles.beam} aria-hidden="true">
            <div className={styles.beamFill} style={{ height: `${fill}%` }} />
          </div>

          {MARCOS.map((m, i) => (
            <li
              key={m.ano}
              data-i={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`${styles.item} ${i <= active ? styles.on : ''} ${m.fim ? styles.fim : ''}`}
            >
              <span className={styles.node} aria-hidden="true" />
              <span className={styles.ano}>{m.ano}</span>
              <p className={styles.texto}>{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
