import { useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { oficinas, paisesAtendidos } from '../../data/oficinas.js';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import styles from './RedeEscritorios.module.css';

/* Hubs (pontos) — estrutura. País/tipo/status vêm do idioma ativo. */
const NODES = [
  { id: 'brasil', x: 360, y: 250, type: 'apoio' },
  { id: 'argentina', x: 214, y: 452, type: 'apoio' },
  { id: 'uruguai', x: 272, y: 446, type: 'atendido' },
  { id: 'paraguai', x: 246, y: 302, type: 'atendido' },
  { id: 'chile', x: 120, y: 378, type: 'matriz' },
];

const MAP_LABELS = [
  { id: 'chile', x: 94, y: 352, anchor: 'middle', transform: 'rotate(-74 94 352)' },
  { id: 'argentina', x: 176, y: 470, anchor: 'middle' },
  { id: 'brasil', x: 350, y: 202, anchor: 'middle' },
  { id: 'paraguai', x: 228, y: 254, anchor: 'middle' },
  { id: 'uruguai', x: 334, y: 418, anchor: 'start' },
];

/* Malha de rotas — só entre países vizinhos, curvas suaves de rodovia. */
const CL_AR = 'M 120 378 Q 166 428 214 452';
const AR_BR = 'M 214 452 Q 292 356 360 250';
const AR_UY = 'M 214 452 Q 244 451 272 446';
const AR_PY = 'M 214 452 Q 222 377 246 302';
const BR_UY = 'M 360 250 Q 330 350 272 446';
const BR_PY = 'M 360 250 Q 300 278 246 302';

const EDGES = [
  { id: 'cl-ar', from: 'chile', to: 'argentina', d: CL_AR, tier: 'main', flow: true },
  { id: 'ar-br', from: 'argentina', to: 'brasil', d: AR_BR, tier: 'main', flow: true },
  { id: 'ar-uy', from: 'argentina', to: 'uruguai', d: AR_UY, tier: 'main' },
  { id: 'ar-py', from: 'argentina', to: 'paraguai', d: AR_PY, tier: 'main' },
  { id: 'br-uy', from: 'brasil', to: 'uruguai', d: BR_UY, tier: 'secondary' },
  { id: 'br-py', from: 'brasil', to: 'paraguai', d: BR_PY, tier: 'secondary' },
];

const TRUCK_A = 'M 120 378 Q 166 428 214 452 Q 292 356 360 250';
const TRUCK_B = AR_UY;
const TRUCK_C = BR_PY;

const LAND =
  'M 102 238 L 152 184 L 216 152 L 286 148 L 346 162 L 392 192 L 408 240 L 396 292 L 366 330 L 344 366 L 330 400 L 316 430 L 300 446 L 292 470 L 268 500 L 238 526 L 212 548 L 190 502 L 150 430 L 116 362 L 100 300 Z';

const dotR = { matriz: 6, apoio: 5, atendido: 4 };

function Truck({ reduce, routeId, dur, startX, startY }) {
  return (
    <g className={styles.truck} transform={reduce ? `translate(${startX} ${startY})` : undefined}>
      <g transform="translate(-4.1 -2.4) scale(0.75)">
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

export function RedeEscritorios() {
  const pt = useContent();
  const { offices } = pt;
  const [active, setActive] = useState(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  const atendidos = paisesAtendidos.filter((p) => !oficinas.some((o) => o.pais === p.nome));
  const activeNode = NODES.find((n) => n.id === active);

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
          <span className={styles.eyebrow}>{offices.eyebrow}</span>
          <h2 className={styles.title}>{offices.title}</h2>
          <p className={styles.subtitle}>{offices.subtitle}</p>
        </header>

        <div className={styles.grid}>
          {/* ---------- Mapa ---------- */}
          <figure className={`${styles.mapWrap} ${active ? styles.mapFocused : ''}`} data-reveal>
            <div className={styles.mapInner}>
              <svg
                className={styles.map}
                viewBox="0 0 480 600"
                role="img"
                aria-label="Rede de rotas da Mondel pelo Cone Sul"
              >
                <defs>
                  <path id="truckA" d={TRUCK_A} />
                  <path id="truckB" d={TRUCK_B} />
                  <path id="truckC" d={TRUCK_C} />
                </defs>

                <g className={styles.mapBase} aria-hidden="true">
                  <g className={styles.contours}>
                    <path d="M20 130 C 160 90, 320 190, 470 120" />
                    <path d="M20 280 C 160 240, 320 340, 470 270" />
                    <path d="M20 430 C 160 390, 320 490, 470 420" />
                    <path d="M120 40 C 90 200, 200 360, 150 570" />
                    <path d="M320 40 C 300 200, 380 360, 340 570" />
                  </g>
                  <path className={styles.land} d={LAND} />
                  <g className={styles.borders}>
                    <path d="M 134 256 L 148 340 L 170 428 L 196 510" />
                    <path d="M 256 168 L 274 244 L 302 300 L 330 358" />
                    <path d="M 214 300 L 302 300" />
                  </g>
                  <g className={styles.labels}>
                    {MAP_LABELS.map((l) => (
                      <text key={l.id} x={l.x} y={l.y} textAnchor={l.anchor} transform={l.transform}>
                        {offices.countries[l.id].toUpperCase()}
                      </text>
                    ))}
                  </g>
                </g>

                <g aria-hidden="true">
                  {EDGES.map((e) => {
                    const state = edgeState(e);
                    return (
                      <g key={e.id}>
                        <path className={`${styles.edge} ${styles[e.tier]} ${state}`} d={e.d} />
                        {e.flow && <path className={`${styles.flow} ${state}`} d={e.d} />}
                      </g>
                    );
                  })}
                </g>

                <Truck reduce={reduce} routeId="truckA" dur="16s" startX={120} startY={378} />
                <Truck reduce={reduce} routeId="truckB" dur="10s" startX={214} startY={452} />
                <Truck reduce={reduce} routeId="truckC" dur="12s" startX={360} startY={250} />

                {NODES.map((n) => (
                  <g
                    key={n.id}
                    className={`${styles.point} ${active === n.id ? styles.pointActive : ''}`}
                    onMouseEnter={enter(n.id)}
                    onMouseLeave={leave(n.id)}
                    onFocus={enter(n.id)}
                    onBlur={leave(n.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${offices.countries[n.id]} — ${offices.tipos[n.type]}`}
                  >
                    <circle className={styles.hit} cx={n.x} cy={n.y} r="15" />
                    {n.type === 'matriz' && (
                      <>
                        <circle className={styles.beacon} cx={n.x} cy={n.y} r="11" />
                        <circle className={styles.ring} cx={n.x} cy={n.y} r="7" />
                      </>
                    )}
                    <circle
                      className={`${styles.dot} ${styles[n.type]}`}
                      cx={n.x}
                      cy={n.y}
                      r={dotR[n.type]}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {activeNode && (
              <div
                className={styles.tooltip}
                style={{
                  left: `${(activeNode.x / 480) * 100}%`,
                  top: `${(activeNode.y / 600) * 100}%`,
                }}
              >
                <span className={styles.ttPais}>{offices.countries[activeNode.id]}</span>
                <span className={`${styles.ttTipo} ${styles[`tt_${activeNode.type}`]}`}>
                  {offices.tipos[activeNode.type]}
                </span>
                <span className={styles.ttStatus}>
                  <i className={styles.ttDot} aria-hidden="true" />
                  {offices.status[activeNode.type]}
                </span>
              </div>
            )}
          </figure>

          {/* ---------- Unidades ---------- */}
          <div className={styles.info}>
            <span className={styles.infoEyebrow}>{offices.units}</span>
            <ul className={styles.units}>
              {oficinas.map((o, i) => (
                <li
                  key={o.id}
                  className={`${styles.unit} ${o.principal ? styles.unitMain : ''} ${
                    active === o.id ? styles.unitActive : ''
                  }`}
                  data-reveal
                  data-reveal-delay={i + 1}
                  onMouseEnter={enter(o.id)}
                  onMouseLeave={leave(o.id)}
                >
                  <span
                    className={`${styles.unitDot} ${o.principal ? styles.dotMatriz : styles.dotApoio}`}
                    aria-hidden="true"
                  />
                  {o.principal && (
                    <span className={styles.badge}>
                      <Star size={11} strokeWidth={2.6} /> {offices.tipos.matriz}
                    </span>
                  )}
                  <span className={styles.unitCountry}>{offices.countries[o.id]}</span>
                  <span className={styles.unitCity}>{o.cidade}</span>
                  <span className={styles.unitAddr}>
                    <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                    {o.endereco}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.also} data-reveal>
              <span className={styles.alsoLabel}>{offices.alsoServe}</span>
              <div className={styles.chips}>
                {atendidos.map((p) => (
                  <span key={p.id} className={styles.chip}>
                    {offices.countries[p.id]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RedeEscritorios;
