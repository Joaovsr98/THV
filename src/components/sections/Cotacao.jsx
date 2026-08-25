import { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useContent, useLang } from '../../i18n/LanguageContext.jsx';
import { paisesCidades, cidadesDoPais, OUTRA_CIDADE } from '../../data/paisesCidades.js';
import { buildQuoteWhatsapp } from '../../utils/contactLinks.js';
import { onPrefillCargo } from '../../utils/quotePrefill.js';
import styles from './Cotacao.module.css';

const emptyForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  originCountry: '',
  originCity: '',
  originCityOther: '',
  destCountry: '',
  destCity: '',
  destCityOther: '',
  cargoType: '',
  weight: '',
  urgency: '',
  message: '',
};

/** Normaliza o peso digitado para número em toneladas (formato pt-BR). */
function formatTons(raw) {
  if (!raw) return '';
  const match = String(raw).replace(/\./g, ',').match(/\d+(?:,\d+)?/);
  if (!match) return '';
  const num = parseFloat(match[0].replace(',', '.'));
  if (Number.isNaN(num)) return '';
  return num.toLocaleString('pt-BR', { maximumFractionDigits: 3 });
}

export function Cotacao() {
  const pt = useContent();
  const { lang } = useLang();
  const { quote } = pt;
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  // Pré-seleção do tipo de carga vinda dos cards de Serviços.
  useEffect(
    () =>
      onPrefillCargo((e) => {
        if (e.detail) setForm((f) => ({ ...f, cargoType: e.detail }));
      }),
    []
  );

  const update = (field) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [field]: value }));
    if (error) setError('');
  };

  // Trocar o país reseta a cidade correspondente (evita combinação inválida).
  const updateCountry = (countryField, cityField, otherField) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [countryField]: value, [cityField]: '', [otherField]: '' }));
    if (error) setError('');
  };

  const resolveCity = (city, other) => (city === OUTRA_CIDADE ? other.trim() : city);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError(quote.error);
      return;
    }
    const payload = {
      ...form,
      originCity: resolveCity(form.originCity, form.originCityOther),
      destCity: resolveCity(form.destCity, form.destCityOther),
    };
    window.open(buildQuoteWhatsapp(payload, pt.quoteMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cotacao" className="section">
      <div className="container">
        <div className={styles.card} data-reveal>
          <div className={styles.intro}>
            <span className="eyebrow">{quote.eyebrow}</span>
            <h2 className={styles.title}>{quote.title}</h2>
            <p className={styles.subtitle}>{quote.subtitle}</p>
            <p className={styles.privacy}>
              <ShieldCheck size={16} strokeWidth={2} /> {quote.privacy}
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <Field label={quote.fields.name} required value={form.name} onChange={update('name')} />
              <Field label={quote.fields.company} value={form.company} onChange={update('company')} />
            </div>
            <div className={styles.row}>
              <Field
                label={quote.fields.phone}
                type="tel"
                required
                value={form.phone}
                onChange={update('phone')}
              />
              <Field
                label={quote.fields.email}
                type="email"
                value={form.email}
                onChange={update('email')}
              />
            </div>

            <RouteBlock
              legend={quote.fields.origin}
              country={form.originCountry}
              city={form.originCity}
              cityOther={form.originCityOther}
              onCountry={updateCountry('originCountry', 'originCity', 'originCityOther')}
              onCity={update('originCity')}
              onCityOther={update('originCityOther')}
              quote={quote}
              lang={lang}
            />

            <RouteBlock
              legend={quote.fields.destination}
              country={form.destCountry}
              city={form.destCity}
              cityOther={form.destCityOther}
              onCountry={updateCountry('destCountry', 'destCity', 'destCityOther')}
              onCity={update('destCity')}
              onCityOther={update('destCityOther')}
              quote={quote}
              lang={lang}
            />

            <label className={styles.field}>
              <span className={styles.label}>{quote.fields.cargoType}</span>
              <div className={styles.selectWrap}>
                <select className={styles.input} value={form.cargoType} onChange={update('cargoType')}>
                  <option value="">{quote.select}</option>
                  {quote.cargoOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
              </div>
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>{quote.fields.weight}</span>
                <div className={styles.suffixWrap}>
                  <input
                    className={styles.input}
                    type="text"
                    inputMode="decimal"
                    value={form.weight}
                    onChange={update('weight')}
                    onBlur={() => setForm((f) => ({ ...f, weight: formatTons(f.weight) }))}
                    placeholder={quote.fields.weightPlaceholder}
                  />
                  <span className={styles.suffix} aria-hidden="true">
                    t
                  </span>
                </div>
              </label>
              <label className={styles.field}>
                <span className={styles.label}>{quote.fields.urgency}</span>
                <div className={styles.selectWrap}>
                  <select className={styles.input} value={form.urgency} onChange={update('urgency')}>
                    <option value="">{quote.select}</option>
                    {quote.urgencyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
                </div>
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>{quote.fields.message}</span>
              <textarea
                className={styles.input}
                rows={4}
                value={form.message}
                onChange={update('message')}
              />
            </label>

            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}

            <button type="submit" className={styles.submit}>
              <MessageCircle size={20} strokeWidth={2.2} />
              {quote.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/** Bloco Origem/Destino com seletor dependente país → cidade. */
function RouteBlock({ legend, country, city, cityOther, onCountry, onCity, onCityOther, quote, lang }) {
  const cities = cidadesDoPais(country, lang);
  const isOther = city === OUTRA_CIDADE;

  return (
    <fieldset className={styles.route}>
      <legend className={styles.legend}>
        <MapPin size={14} strokeWidth={2.2} aria-hidden="true" />
        {legend}
      </legend>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>{quote.fields.country}</span>
          <div className={styles.selectWrap}>
            <select className={styles.input} value={country} onChange={onCountry}>
              <option value="">{quote.fields.selectCountry}</option>
              {paisesCidades.map((p) => (
                <option key={p.code} value={p.nome[lang] || p.nome.pt}>
                  {p.nome[lang] || p.nome.pt}
                </option>
              ))}
            </select>
            <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
          </div>
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{quote.fields.city}</span>
          <div className={styles.selectWrap}>
            <select className={styles.input} value={city} onChange={onCity} disabled={!country}>
              <option value="">
                {country ? quote.fields.selectCity : quote.fields.pickCountryFirst}
              </option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
              {country && <option value={OUTRA_CIDADE}>{quote.fields.otherCity}</option>}
            </select>
            <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
          </div>
        </label>
      </div>

      {isOther && (
        <label className={`${styles.field} ${styles.otherReveal}`}>
          <span className={styles.label}>{quote.fields.otherCity}</span>
          <input
            className={styles.input}
            type="text"
            value={cityOther}
            onChange={onCityOther}
            placeholder={quote.fields.otherCityPlaceholder}
          />
        </label>
      )}
    </fieldset>
  );
}

function Field({ label, required, type = 'text', value, onChange, placeholder }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {required && <em className={styles.req}>*</em>}
      </span>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Cotacao;
