import { useState } from 'react';
import { MapPin, Star, ChevronDown } from 'lucide-react';
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

/* Silhueta geograficamente fiel do Brasil (fonte: mapsicon, path único).
   O path vive num espaço 0–10240 invertido no Y, por isso o <g> aplica
   translate(0,1024) scale(0.1,-0.1) para caber no viewBox 0 0 1024 1024.
   Os nós/rotas ficam FORA desse grupo, direto no espaço 1024x1024. */
const BRASIL =
  'M3255 9936 c-38 -13 -112 -44 -162 -69 -70 -36 -104 -47 -138 -47 -29 0 -60 -8 -84 -22 -32 -18 -40 -30 -47 -65 l-9 -44 -57 36 c-53 34 -64 37 -140 38 -46 1 -91 -2 -100 -6 -13 -7 -20 -1 -33 22 l-16 31 -91 0 -91 0 84 -60 84 -60 -4 -80 c-3 -75 -1 -84 24 -120 23 -32 26 -45 20 -78 -7 -44 -11 -42 110 -57 28 -4 56 -8 63 -10 19 -7 -70 -83 -114 -99 -29 -10 -40 -20 -44 -40 -3 -14 -18 -42 -34 -62 l-28 -36 -25 24 -25 23 -30 -37 c-16 -21 -56 -52 -88 -69 -40 -21 -69 -47 -96 -84 -41 -56 -54 -60 -54 -19 0 31 -4 30 -85 -6 -76 -34 -63 -38 -159 47 -52 47 -65 53 -103 53 l-43 0 0 56 c0 51 -4 61 -46 115 -51 67 -47 67 -137 1 l-49 -35 -36 19 c-20 10 -40 20 -44 22 -5 2 -8 -5 -8 -16 0 -28 -77 -36 -247 -27 l-133 7 -20 -46 c-10 -25 -22 -69 -26 -96 l-7 -50 44 -1 c24 0 64 -8 89 -17 38 -15 46 -23 53 -55 5 -21 7 -41 4 -44 -3 -3 -21 4 -39 15 l-33 20 -72 -33 -73 -34 0 -96 0 -96 59 -54 c52 -49 62 -65 91 -146 l33 -91 -22 -62 c-18 -49 -24 -99 -33 -251 l-10 -190 -48 -125 c-32 -84 -53 -124 -62 -122 -7 2 -37 6 -67 9 -42 5 -57 3 -65 -9 -16 -22 -111 -68 -140 -68 -75 0 -254 -58 -296 -96 -14 -12 -57 -43 -97 -68 -77 -49 -87 -70 -82 -156 2 -24 -6 -48 -25 -77 l-28 -42 17 -58 17 -58 -24 -14 c-12 -8 -44 -37 -70 -63 -37 -36 -48 -55 -48 -79 0 -22 5 -32 20 -36 27 -7 25 -16 -8 -31 -67 -29 -99 -97 -50 -104 17 -2 24 -12 28 -38 7 -43 139 -243 188 -286 l36 -31 -27 -46 c-15 -25 -27 -48 -27 -51 0 -3 31 -6 69 -6 38 0 92 -5 120 -12 46 -10 51 -14 51 -38 0 -15 7 -34 16 -41 9 -7 20 -23 24 -35 9 -23 51 -34 135 -34 47 1 56 5 155 80 57 44 110 80 116 80 6 0 17 -7 24 -15 10 -12 8 -25 -10 -69 -21 -50 -22 -59 -11 -130 6 -42 11 -97 11 -121 0 -39 4 -46 30 -60 40 -21 60 -19 102 10 35 24 44 25 175 25 76 0 152 -4 168 -8 48 -14 110 7 140 47 14 21 43 42 68 51 23 9 71 37 106 63 35 26 74 47 87 47 14 0 30 10 41 26 23 36 83 72 166 100 55 19 92 24 168 24 113 0 117 -4 93 -93 -19 -70 -18 -137 2 -166 12 -17 15 -35 10 -68 -3 -25 -2 -62 4 -82 5 -20 12 -48 15 -63 4 -21 15 -30 54 -43 33 -11 58 -28 76 -51 17 -22 34 -34 50 -34 20 0 25 -7 31 -35 6 -31 9 -35 51 -41 25 -4 76 -4 114 -1 53 4 70 2 80 -9 23 -28 68 -45 88 -35 14 8 24 4 46 -19 16 -17 36 -30 45 -30 9 0 31 -11 50 -25 25 -18 46 -25 82 -25 43 0 48 -3 54 -25 3 -14 20 -36 38 -49 27 -20 47 -24 146 -30 146 -8 162 -11 205 -50 29 -25 36 -41 43 -86 6 -40 20 -73 50 -117 28 -42 42 -73 42 -95 0 -33 0 -33 -45 -30 -41 4 -45 2 -51 -23 -5 -20 0 -34 23 -63 22 -27 31 -52 35 -92 4 -30 14 -74 23 -97 l17 -43 157 -1 c86 -1 183 0 217 1 72 2 83 -10 59 -67 -9 -20 -15 -66 -15 -107 l0 -71 73 -47 c39 -26 84 -52 100 -59 38 -17 50 -69 49 -206 l0 -113 -40 -47 c-38 -46 -82 -158 -82 -210 0 -35 41 -178 61 -209 24 -39 25 -105 2 -189 -14 -54 -15 -68 -4 -88 10 -18 10 -30 2 -45 -19 -35 -13 -40 58 -52 59 -11 75 -11 116 4 45 15 50 15 66 0 17 -15 20 -15 45 5 27 22 44 20 44 -5 0 -10 14 -14 56 -14 48 0 62 -5 95 -31 22 -17 44 -41 51 -52 21 -39 48 -161 54 -245 7 -78 9 -84 36 -98 25 -13 36 -13 108 4 l81 19 18 -23 c50 -64 48 -164 -8 -311 -30 -80 -30 -83 -11 -93 10 -5 32 -10 48 -10 16 0 50 -9 74 -20 65 -29 78 -68 77 -235 0 -129 0 -130 -27 -151 -15 -11 -54 -31 -87 -44 -36 -14 -85 -46 -124 -79 -34 -31 -88 -77 -120 -102 -118 -97 -228 -213 -241 -254 -7 -22 -35 -66 -61 -98 -27 -32 -56 -72 -66 -88 -10 -16 -26 -32 -38 -35 -11 -4 -36 -19 -56 -35 -30 -23 -35 -33 -31 -58 3 -24 10 -31 35 -37 26 -5 34 -2 54 22 29 37 78 35 108 -4 11 -15 48 -55 82 -90 35 -34 63 -71 63 -81 0 -10 8 -25 19 -35 16 -15 19 -15 31 -1 7 9 22 21 33 27 18 9 28 2 82 -56 51 -55 67 -66 94 -66 27 0 44 -12 107 -78 41 -42 77 -80 81 -84 5 -4 50 -48 102 -98 82 -79 169 -140 200 -140 5 0 20 17 32 38 12 20 64 80 114 132 51 52 107 118 125 145 19 28 65 88 104 135 114 136 127 156 143 216 19 74 80 159 184 259 88 84 209 228 209 248 0 7 16 45 35 85 33 69 34 75 20 102 -8 16 -15 46 -15 66 0 21 -7 60 -16 88 -16 51 -15 52 21 171 54 178 82 224 174 289 42 30 110 87 151 128 96 94 154 131 256 165 l82 26 62 -26 c34 -15 66 -27 71 -27 5 0 18 14 28 31 15 24 17 38 10 57 -5 14 -8 27 -5 29 2 3 36 15 75 27 70 22 71 23 51 41 -27 25 -17 35 37 35 32 0 50 -5 59 -17 12 -17 17 -14 63 32 l51 49 0 -36 0 -36 163 -6 c89 -4 191 -8 227 -9 l65 -2 10 61 c13 78 36 105 115 133 87 31 130 78 130 142 0 38 5 50 34 78 22 21 36 46 40 71 5 32 17 47 85 101 71 58 81 69 96 121 14 45 24 60 51 74 28 15 40 34 73 114 28 66 41 115 44 160 8 116 35 189 88 241 l47 46 16 134 c9 81 28 176 47 239 29 95 33 122 39 290 6 157 12 206 39 325 18 77 43 165 55 195 l22 55 56 5 57 5 63 85 c66 87 146 216 191 306 15 29 48 70 80 97 31 26 72 69 91 96 31 41 45 51 87 62 44 12 58 23 127 101 204 234 233 273 294 393 117 230 134 303 93 404 -14 36 -25 84 -25 107 0 77 -22 198 -42 233 -10 19 -22 63 -25 99 -6 63 -8 67 -65 124 l-58 58 -107 0 c-241 1 -429 93 -560 277 -38 54 -57 70 -117 99 -46 24 -95 60 -141 105 -65 63 -77 71 -173 104 -102 35 -109 36 -320 45 -130 5 -241 15 -277 24 -33 8 -84 15 -113 16 -40 0 -70 9 -124 36 -39 20 -101 42 -138 50 -38 7 -74 16 -82 19 -8 3 -23 -7 -36 -25 -19 -25 -29 -30 -66 -30 -40 0 -47 -4 -81 -46 l-38 -46 -13 23 c-12 22 -9 27 27 64 21 23 39 48 39 56 0 8 -20 30 -44 48 -37 28 -46 41 -53 80 -7 39 -14 49 -43 63 -23 12 -48 16 -72 13 -32 -4 -47 1 -102 39 -35 24 -81 49 -103 56 -21 7 -92 37 -158 68 l-120 56 -133 4 -133 4 -30 -28 c-17 -16 -51 -60 -77 -98 -50 -73 -98 -106 -152 -106 l-30 0 75 104 c93 127 103 157 72 203 -26 39 -59 52 -147 60 -76 6 -167 53 -172 87 -3 18 -11 21 -60 24 -53 3 -57 5 -72 36 -22 47 -20 66 7 66 42 0 48 11 37 71 -7 38 -7 72 0 109 10 54 10 56 -17 77 -16 13 -42 23 -59 23 -29 0 -32 3 -37 38 -4 21 -13 46 -21 57 -13 18 -15 18 -41 1 -15 -10 -29 -16 -31 -13 -3 2 -9 32 -15 66 -6 37 -22 81 -39 110 -23 37 -30 60 -30 102 -1 143 -58 259 -127 259 -27 0 -45 -10 -85 -47 -63 -60 -171 -267 -183 -351 -6 -44 -14 -59 -47 -90 l-39 -37 -111 9 c-79 7 -126 6 -167 -2 -32 -7 -83 -12 -115 -12 -51 0 -64 4 -107 35 l-48 36 -67 -12 c-37 -6 -94 -9 -127 -5 -48 5 -64 3 -79 -11 -22 -20 -23 -64 -2 -105 23 -44 8 -50 -122 -45 -90 2 -117 7 -146 24 l-36 21 -58 -48 c-48 -39 -87 -58 -199 -99 -167 -61 -199 -63 -269 -18 -28 19 -65 42 -83 52 -35 20 -43 39 -43 105 0 25 -7 70 -15 100 -8 30 -14 78 -13 106 1 39 -4 59 -20 82 l-22 30 50 42 c48 41 50 43 50 95 0 50 -2 55 -39 84 -30 24 -49 31 -81 31 -33 0 -50 7 -77 30 -42 37 -95 39 -198 6z';

const ESTADOS = [
  {
    id: 'pe',
    uf: 'PE',
    nome: 'Pernambuco',
    x: 902,
    y: 452,
    cidades: ['Recife'],
  },
  {
    id: 'ba',
    uf: 'BA',
    nome: 'Bahia',
    x: 834,
    y: 584,
    cidades: ['Simões Filho'],
  },
  {
    id: 'mg',
    uf: 'MG',
    nome: 'Minas Gerais',
    x: 700,
    y: 680,
    cidades: ['Contagem', 'Divinópolis', 'Barão de Cocais'],
  },
  {
    id: 'rj',
    uf: 'RJ',
    nome: 'Rio de Janeiro',
    x: 730,
    y: 742,
    cidades: ['Rio de Janeiro', 'Itaguaí'],
  },
  {
    id: 'sp',
    uf: 'SP',
    nome: 'São Paulo',
    x: 662,
    y: 752,
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
  { id: 'sp-rj', from: 'sp', to: 'rj', d: 'M662 752 Q700 744 730 742' },
  { id: 'sp-mg', from: 'sp', to: 'mg', d: 'M662 752 Q674 712 700 680' },
  { id: 'mg-ba', from: 'mg', to: 'ba', d: 'M700 680 Q778 636 834 584' },
  { id: 'ba-pe', from: 'ba', to: 'pe', d: 'M834 584 Q882 516 902 452' },
];

const TRUCK_ROUTE =
  'M662 752 Q674 712 700 680 Q778 636 834 584 Q882 516 902 452';

const totalUnidades = ESTADOS.reduce((n, e) => n + e.cidades.length, 0);

/* Carreta em vista lateral simplificada (cavalo + reboque), na escala do
   viewBox 1024. Percorre a rota, faz breve pausa no destino e reinicia
   com fade discreto — sem sensação de "brinquedo" circulando sem parar. */
function Truck({ reduce, routeId, dur, startX, startY }) {
  return (
    <g className={styles.truck} transform={reduce ? `translate(${startX} ${startY})` : undefined}>
      <g transform="translate(-13 -7) scale(1.75)">
        <rect className={styles.truckBody} x="0" y="1.6" width="15.5" height="8.4" rx="1.2" />
        <rect className={styles.truckStripe} x="1.2" y="3" width="13" height="2" rx="0.6" />
        <path className={styles.truckCab} d="M15.5 10 L15.5 4.4 Q15.5 3.2 16.8 3.2 L20.4 3.2 L23.4 6.4 L23.4 10 Z" />
        <rect className={styles.truckWindow} x="17.2" y="4.4" width="4.2" height="2.6" rx="0.5" />
        <circle className={styles.wheel} cx="4" cy="10.4" r="2" />
        <circle className={styles.wheel} cx="11.2" cy="10.4" r="2" />
        <circle className={styles.wheel} cx="20.4" cy="10.4" r="2" />
      </g>
      {!reduce && (
        <>
          <animateMotion
            dur={dur}
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;1;1"
            keyTimes="0;0.8;1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0 0 1 1"
          >
            <mpath href={`#${routeId}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            dur={dur}
            repeatCount="indefinite"
            values="0;1;1;1;0;0"
            keyTimes="0;0.04;0.78;0.85;0.92;1"
            calcMode="linear"
          />
        </>
      )}
    </g>
  );
}

export function MapaBrasil() {
  const [active, setActive] = useState(null);
  const [openId, setOpenId] = useState(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');

  const enter = (id) => () => setActive(id);
  const leave = (id) => () => setActive((a) => (a === id ? null : a));
  // Mobile: alterna o accordion do estado (e destaca no mapa).
  const toggle = (id) => () => {
    setOpenId((o) => (o === id ? null : id));
    setActive(id);
  };
  const edgeState = (e) => {
    if (!active) return '';
    return e.from === active || e.to === active ? styles.edgeOn : styles.edgeDim;
  };

  return (
    <section id="atuacao" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* ---------- Cabeçalho + contador ---------- */}
          <div className={styles.headBlock}>
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
            <div className={styles.count} data-reveal>
              <span className={styles.countValue}>{totalUnidades}</span>
              <span className={styles.countLabel}>
                unidades
                <br />
                em 5 estados
              </span>
            </div>
          </div>

          {/* ---------- Unidades (accordion no mobile) ---------- */}
          <div className={styles.unitsBlock}>
            <ul className={styles.units}>
                {ESTADOS.map((s, i) => (
                  <li
                    key={s.id}
                    className={`${styles.unit} ${active === s.id ? styles.unitActive : ''} ${
                      openId === s.id ? styles.open : ''
                    }`}
                    data-reveal
                    data-reveal-delay={i + 1}
                    onMouseEnter={enter(s.id)}
                    onMouseLeave={leave(s.id)}
                  >
                    <button
                      type="button"
                      className={styles.unitHead}
                      onClick={toggle(s.id)}
                      aria-expanded={openId === s.id}
                    >
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
                      <ChevronDown size={16} strokeWidth={2.4} className={styles.chevron} aria-hidden="true" />
                    </button>
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
              Presença documentada na rede da THV.
            </p>
          </div>

          {/* ---------- Mapa (protagonista) ---------- */}
          <figure className={`${styles.mapWrap} ${active ? styles.mapFocused : ''}`} data-reveal>
            <svg
              className={styles.map}
              viewBox="0 0 1024 1024"
              role="img"
              aria-label="Mapa da presença da THV no Brasil"
            >
              <defs>
                <path id="thvTruckRoute" d={TRUCK_ROUTE} />
                <linearGradient id="thvPlate" x1="0" y1="0" x2="0.4" y2="1">
                  <stop offset="0" stopColor="#2b3f70" />
                  <stop offset="0.55" stopColor="#22335f" />
                  <stop offset="1" stopColor="#1a2748" />
                </linearGradient>
              </defs>

              {/* Chapa de aço — contorno fiel do Brasil */}
              <g transform="translate(0,1024) scale(0.1,-0.1)" aria-hidden="true">
                <path className={styles.plate} d={BRASIL} />
              </g>

              {/* Rotas de engenharia entre os estados */}
              <g aria-hidden="true">
                {EDGES.map((e) => (
                  <g key={e.id} className={edgeState(e)}>
                    <path className={styles.edge} d={e.d} />
                    <path className={styles.flow} d={e.d} />
                  </g>
                ))}
              </g>

              <Truck reduce={reduce} routeId="thvTruckRoute" dur="15s" startX={662} startY={752} />

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
                  <circle className={styles.hit} cx={s.x} cy={s.y} r="34" />
                  {s.hub && <circle className={styles.beacon} cx={s.x} cy={s.y} r="26" />}
                  {s.hub && <circle className={styles.ring} cx={s.x} cy={s.y} r="17" />}
                  <circle
                    className={`${styles.dot} ${s.hub ? styles.dotHub : ''}`}
                    cx={s.x}
                    cy={s.y}
                    r={s.hub ? 13 : 10}
                  />
                  <text
                    className={styles.uf}
                    x={s.x + (s.id === 'sp' ? -30 : 26)}
                    y={s.y + 9}
                    textAnchor={s.id === 'sp' ? 'end' : 'start'}
                  >
                    {s.uf}
                  </text>
                </g>
              ))}
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default MapaBrasil;
