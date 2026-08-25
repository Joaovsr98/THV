import { HandHeart, Recycle, Leaf, HeartHandshake } from 'lucide-react';
import styles from './Responsabilidade.module.css';

/* ---------------------------------------------------------------------
   RESPONSABILIDADE — THV.
   Só iniciativas documentadas na auditoria, tratamento sóbrio (nada de
   selo verde enfeitado). Enquadra como parte da mesma disciplina da
   operação: o rigor aplicado a pessoas e ao meio ambiente.
   --------------------------------------------------------------------- */

const INICIATIVAS = [
  {
    icon: HandHeart,
    ano: '2002',
    title: 'Programa Na Mão Certa',
    text: 'Parceira do programa da Childhood Brasil, no compromisso contra a exploração de crianças e adolescentes nas rodovias.',
  },
  {
    icon: Recycle,
    ano: '2006',
    title: 'Destinação de pneus',
    text: 'Parceria para coleta, reciclagem e destinação ambientalmente correta de pneus inservíveis.',
  },
  {
    icon: Leaf,
    ano: '2007',
    title: 'Limpeza sem solventes',
    text: 'Sistema Bio-Circle: substitui solventes tóxicos por um processo biológico na manutenção da frota.',
  },
  {
    icon: HeartHandshake,
    ano: '2011',
    title: 'Transportando Solidariedade',
    text: 'Projeto próprio da THV, transformando os valores da empresa em ações sociais na comunidade.',
  },
];

export function Responsabilidade() {
  return (
    <section id="responsabilidade" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Responsabilidade
          </span>
          <h2 className={styles.title}>O mesmo rigor com pessoas e com o meio ambiente</h2>
          <p className={styles.subtitle}>
            Iniciativas ambientais e sociais que fazem parte da operação da THV há mais de duas
            décadas.
          </p>
        </header>

        <div className={styles.grid}>
          {INICIATIVAS.map((it, i) => {
            const Icon = it.icon;
            return (
              <article key={it.title} className={styles.card} data-reveal data-reveal-delay={(i % 4) + 1}>
                <div className={styles.cardTop}>
                  <span className={styles.iconWrap}>
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className={styles.ano}>Desde {it.ano}</span>
                </div>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Responsabilidade;
