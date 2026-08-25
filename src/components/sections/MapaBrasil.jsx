import { useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import styles from './MapaBrasil.module.css';

/* ---------------------------------------------------------------------
   MAPA OPERACIONAL — THV no Brasil.
   Reaproveita o motor da base (hover→destaque, caminhõezinhos animados,
   lista sincronizada). Geometria nova: Brasil em "chapa de aço", as 16
   unidades documentadas agrupadas por estado (SP·RJ·MG·PE·BA).
   Presença DOCUMENTADA na auditoria — a atividade atual de cada unidade
   ainda precisa ser confirmada com a empresa.
   --------------------------------------------------------------------- */

// Contorno do Brasil (silhueta reconhecível). Pontos projetados das
// coordenadas geográficas reais da fronteira. viewBox 0 0 460 460.
const BRASIL =
  'M155.7 3.4 L160.2 15.8 L250.4 15.8 L270.7 59.8 L287.6 76.7 L335 88 ' +
  'L400.4 101.5 L442.2 139.9 L441 150.6 L432 168.1 L400.4 206.4 L394.8 226.7 ' +
  'L385.8 284.3 L347.4 319.3 L312.5 330.3 L287.6 347.4 L286.5 371.1 L265.1 403.8 ' +
  'L232.4 439.9 L185 398.2 L178.2 307.9 L185 274.1 L157.9 243.6 L112.8 200.8 ' +
  'L67.7 183.9 L2.3 144.4 L45.1 104.9 L56.4 71.1 L101.5 48.5 L118.4 15.8 Z';

const ESTADOS = [
  {
    id: 'pe',
    uf: 'PE',
    nome: 'Pernambuco',
    x: 438,
    y: 152,
    cidades: ['Recife'],
  },
  {
    id: 'ba',
    uf: 'BA',
    nome: 'Bahia',
    x: 398,
    y: 208,
    cidades: ['Simões Filho'],
  },
  {
    id: 'mg',
    uf: 'MG',
    nome: 'Minas Gerais',
    x: 340,
    y: 286,
    cidades: ['Contagem', 'Divinópolis', 'Barão de Cocais'],
  },
  {
    id: 'rj',
    uf: 'RJ',
    nome: 'Rio de Janeiro',
    x: 349,
    y: 318,
    cidades: ['Rio de Janeiro', 'Itaguaí'],
  },
  {
    id: 'sp',
    uf: 'SP',
    nome: 'São Paulo',
    x: 312,
    y: 326,
    hub: true,
    cidades: [
      'Guarulhos',
      'Guarulhos 2',
      'Cotia',
      'Araçariguama',
      'Água Funda',
      'Mogi das Cruzes',
      'Pindamonhangaba',
      'São José dos Campos',
      'São Caetano do Sul',
    ],
  },
];

const EDGES = [
  { id: 'sp-rj', from: 'sp', to: 'rj', d: 'M312 326 Q332 320 349 318' },
  { id: 'sp-mg', from: 'sp', to: 'mg', d: 'M312 326 Q328 302 340 286' },
  { id: 'mg-ba', from: 'mg', to: 'ba', d: 'M340 286 Q378 242 398 208' },
  { id: 'ba-pe', from: 'ba', to: 'pe', d: 'M398 208 Q424 178 438 152' },
];

const TRUCK_ROUTE =
  'M312 326 Q328 302 340 286 Q378 242 398 208 Q424 178 438 152';

const totalUnidades = ESTADOS.reduce((n, e) => n + e.cidades.length, 0);

function Truck({ reduce, routeId, dur, startX, startY }) {
  return (
    <g className={styles.truck} transform={reduce ? `translate(${startX} ${startY})` : undefined}>
      <g transform="translate(-4.1 -2.4) scale(0.8)">
        <rect className={styles.truckBox} x="0" y="0.4" width="6.5" height="4.8" rx="1" />
        <rect className={styles.truckCab} x="6.5" y="1.6" width="3.6" height="3.6" rx="0.8" />
        <circle className={styles.wheel} cx="2" cy="5.7" r="1" />
        <circle className={styles.wheel} cx="7.7" cy="5.7" r="1" />
      </g>
      {!reduce && (
        <animateMotion dur={dur} repeatCount="indefinite" rotate="auto">
          <mpath href={`#${routeId}`} />
        </animateMotion>
      )}
    </g>
  );
}

export function MapaBrasil() {
  const [active, setActive] = useState(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');

  const enter = (id) => () => setActive(id);
  const leave = (id) => () => setActive((a) => (a === id ? null : a));
  const edgeState = (e) => {
    if (!active) return '';
    return e.from === active || e.to === active ? styles.edgeOn : styles.edgeDim;
  };

  return (
    <section id="atuacao" className={styles.section}>
      <div className="container">
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Presença nacional
          </span>
          <h2 className={styles.title}>Estrutura instalada onde a indústria está</h2>
          <p className={styles.subtitle}>
            Unidades em cinco estados, cobrindo os principais polos siderúrgicos do país.
          </p>
        </header>

        <div className={styles.grid}>
          {/* ---------- Mapa ---------- */}
          <figure className={`${styles.mapWrap} ${active ? styles.mapFocused : ''}`} data-reveal>
            <svg
              className={styles.map}
              viewBox="0 0 460 460"
              role="img"
              aria-label="Mapa da presença da THV no Brasil"
            >
              <defs>
                <path id="thvTruckRoute" d={TRUCK_ROUTE} />
              </defs>

              {/* Chapa de aço — contorno do Brasil */}
              <path className={styles.plate} d={BRASIL} />
              <path className={styles.plateEdge} d={BRASIL} />

              {/* Rotas de engenharia entre os estados */}
              <g aria-hidden="true">
                {EDGES.map((e) => (
                  <path key={e.id} className={`${styles.edge} ${edgeState(e)}`} d={e.d} />
                ))}
              </g>

              <Truck reduce={reduce} routeId="thvTruckRoute" dur="14s" startX={282} startY={354} />

              {/* Nós dos estados */}
              {ESTADOS.map((s) => (
                <g
                  key={s.id}
                  className={`${styles.node} ${active === s.id ? styles.nodeActive : ''}`}
                  onMouseEnter={enter(s.id)}
                  onMouseLeave={leave(s.id)}
                  onFocus={enter(s.id)}
                  onBlur={leave(s.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.nome}, ${s.cidades.length} ${s.cidades.length > 1 ? 'unidades' : 'unidade'}`}
                >
                  <circle className={styles.hit} cx={s.x} cy={s.y} r="16" />
                  {s.hub && <circle className={styles.beacon} cx={s.x} cy={s.y} r="12" />}
                  <circle className={`${styles.dot} ${s.hub ? styles.dotHub : ''}`} cx={s.x} cy={s.y} r={s.hub ? 7 : 5} />
                  <text className={styles.uf} x={s.x + (s.id === 'sp' ? -14 : 12)} y={s.y + 4} textAnchor={s.id === 'sp' ? 'end' : 'start'}>
                    {s.uf}
                  </text>
                </g>
              ))}
            </svg>
          </figure>

          {/* ---------- Unidades ---------- */}
          <div className={styles.info}>
            <div className={styles.count} data-reveal>
              <span className={styles.countValue}>{totalUnidades}</span>
              <span className={styles.countLabel}>unidades em 5 estados</span>
            </div>

            <ul className={styles.units}>
              {ESTADOS.map((s, i) => (
                <li
                  key={s.id}
                  className={`${styles.unit} ${active === s.id ? styles.unitActive : ''}`}
                  data-reveal
                  data-reveal-delay={i + 1}
                  onMouseEnter={enter(s.id)}
                  onMouseLeave={leave(s.id)}
                >
                  <div className={styles.unitHead}>
                    <span className={`${styles.badge} ${s.hub ? styles.badgeHub : ''}`}>{s.uf}</span>
                    <span className={styles.unitState}>{s.nome}</span>
                    {s.hub && (
                      <span className={styles.hubTag}>
                        <Star size={11} strokeWidth={2.6} /> Base operacional
                      </span>
                    )}
                    <span className={styles.unitCount}>
                      {s.cidades.length} {s.cidades.length > 1 ? 'unidades' : 'unidade'}
                    </span>
                  </div>
                  <div className={styles.cities}>
                    {s.cidades.map((c) => (
                      <span key={c} className={styles.city}>
                        <MapPin size={12} strokeWidth={2} aria-hidden="true" />
                        {c}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.note} data-reveal>
              Presença documentada. A confirmação da atividade atual de cada unidade será feita com a
              THV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapaBrasil;
