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

// Contorno simplificado do Brasil (chapa recortada). viewBox 0 0 460 540.
const BRASIL =
  'M150 60 Q120 44 175 46 Q230 50 250 92 Q300 120 330 128 Q372 138 404 172 ' +
  'Q388 212 360 236 Q350 280 330 316 Q320 344 300 360 Q286 372 276 392 ' +
  'Q262 430 238 468 Q228 486 210 470 Q190 440 176 402 Q150 360 120 336 ' +
  'Q78 322 66 286 Q58 240 84 214 Q96 176 120 150 Q132 104 150 60 Z';

const ESTADOS = [
  {
    id: 'pe',
    uf: 'PE',
    nome: 'Pernambuco',
    x: 392,
    y: 168,
    cidades: ['Recife'],
  },
  {
    id: 'ba',
    uf: 'BA',
    nome: 'Bahia',
    x: 352,
    y: 232,
    cidades: ['Simões Filho'],
  },
  {
    id: 'mg',
    uf: 'MG',
    nome: 'Minas Gerais',
    x: 300,
    y: 300,
    cidades: ['Contagem', 'Divinópolis', 'Barão de Cocais'],
  },
  {
    id: 'rj',
    uf: 'RJ',
    nome: 'Rio de Janeiro',
    x: 324,
    y: 332,
    cidades: ['Rio de Janeiro', 'Itaguaí'],
  },
  {
    id: 'sp',
    uf: 'SP',
    nome: 'São Paulo',
    x: 282,
    y: 354,
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
  { id: 'sp-rj', from: 'sp', to: 'rj', d: 'M282 354 Q306 336 324 332' },
  { id: 'sp-mg', from: 'sp', to: 'mg', d: 'M282 354 Q286 324 300 300' },
  { id: 'mg-ba', from: 'mg', to: 'ba', d: 'M300 300 Q330 262 352 232' },
  { id: 'ba-pe', from: 'ba', to: 'pe', d: 'M352 232 Q378 198 392 168' },
];

const TRUCK_ROUTE =
  'M282 354 Q286 324 300 300 Q330 262 352 232 Q378 198 392 168';

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
              viewBox="0 0 460 540"
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
                  aria-label={`${s.nome} — ${s.cidades.length} ${s.cidades.length > 1 ? 'unidades' : 'unidade'}`}
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
