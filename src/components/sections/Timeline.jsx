import styles from './Timeline.module.css';

/* ---------------------------------------------------------------------
   TIMELINE — "Forjada ao longo do tempo".
   Desktop: linha do tempo HORIZONTAL, marcos alternados acima/abaixo do
   eixo. Mobile: vira vertical, com o eixo à esquerda. Só marcos
   documentados na auditoria; "HOJE" apenas como fechamento visual.
   --------------------------------------------------------------------- */

const MARCOS = [
  { ano: '1987', texto: 'Início das atividades, com frota dedicada à Gerdau e à Cosigua.' },
  { ano: '1990', texto: 'Filial no Rio de Janeiro.' },
  { ano: '1994', texto: 'Expansão para a Bahia e Pernambuco.' },
  { ano: '1998', texto: 'Transpains e entrada em Minas Gerais.' },
  { ano: '2000', texto: 'Certificação ISO 9002.' },
  { ano: '2002', texto: 'Três centros de distribuição.' },
  { ano: '2005', texto: 'Garagem de 20.000 m² em Guarulhos.' },
  { ano: '2007', texto: 'Monitoramento 24h e serviço de escolta.' },
  { ano: '2010', texto: 'Conhecimento eletrônico.' },
  { ano: '2012', texto: 'Centro de distribuição em Salvador.' },
  { ano: 'HOJE', texto: 'Presença em cinco estados brasileiros.', fim: true },
];

export function Timeline() {
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

        <ol className={styles.track} data-reveal>
          <span className={styles.axis} aria-hidden="true" />
          {MARCOS.map((m, i) => (
            <li
              key={m.ano}
              className={`${styles.item} ${m.fim ? styles.fim : ''}`}
              style={{ '--i': i }}
            >
              <span className={styles.content}>
                <span className={styles.ano}>{m.ano}</span>
                <span className={styles.texto}>{m.texto}</span>
              </span>
              <span className={styles.node} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
