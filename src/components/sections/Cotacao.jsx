import { useEffect, useState } from 'react';
import { FileText, Check, ShieldCheck, Clock, Truck } from 'lucide-react';
import { servicos } from '../../data/servicos.js';
import { onPrefillCargo } from '../../utils/quotePrefill.js';
import styles from './Cotacao.module.css';

/* ---------------------------------------------------------------------
   COTAÇÃO — THV. Form self-contained. Sem backend/WhatsApp confirmado,
   o envio compõe um e-mail para o canal confirmado (thvmtz@thv.com.br).
   Pré-seleciona o tipo de carga quando aberto por um card de Serviços.
   --------------------------------------------------------------------- */

const CARGAS = [...servicos.map((s) => s.title), 'Outros'];
const EMAIL = 'thvmtz@thv.com.br';

const GARANTIAS = [
  { icon: Truck, text: 'Especialista em cargas siderúrgicas' },
  { icon: ShieldCheck, text: 'Operação monitorada e controlada' },
  { icon: Clock, text: 'Retorno para montar a melhor solução' },
];

export function Cotacao() {
  const [form, setForm] = useState({
    cargo: '',
    natureza: 'Completa',
    origem: '',
    destino: '',
    nome: '',
    contato: '',
    mensagem: '',
  });
  const [erro, setErro] = useState('');

  // Pré-seleção vinda dos cards de Serviços.
  useEffect(() => onPrefillCargo((e) => setForm((f) => ({ ...f, cargo: e.detail }))), []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (erro) setErro('');
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.cargo || !form.nome.trim() || !form.contato.trim()) {
      setErro('Preencha o tipo de carga, o nome e um contato.');
      return;
    }
    const corpo = [
      `Tipo de carga: ${form.cargo}`,
      `Natureza: ${form.natureza}`,
      `Origem: ${form.origem || '-'}`,
      `Destino: ${form.destino || '-'}`,
      '',
      `Nome: ${form.nome}`,
      `Contato: ${form.contato}`,
      '',
      form.mensagem ? `Mensagem: ${form.mensagem}` : '',
    ].join('\n');
    const assunto = `Solicitação de cotação: ${form.cargo}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  };

  return (
    <section id="cotacao" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* ---------- Pitch ---------- */}
        <div className={styles.pitch} data-reveal>
          <span className={styles.eyebrow}>
            <i className={styles.tick} aria-hidden="true" />
            Cotação
          </span>
          <h2 className={styles.title}>Vamos mover a sua operação</h2>
          <p className={styles.lead}>
            Conte o que precisa transportar. A THV retorna com a melhor solução para a sua carga.
          </p>
          <ul className={styles.garantias}>
            {GARANTIAS.map((g) => {
              const Icon = g.icon;
              return (
                <li key={g.text}>
                  <Icon size={17} strokeWidth={2.2} aria-hidden="true" />
                  {g.text}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Formulário ---------- */}
        <form className={styles.form} onSubmit={submit} noValidate>
          <div className={styles.field}>
            <label htmlFor="cargo">Tipo de carga</label>
            <select id="cargo" value={form.cargo} onChange={set('cargo')}>
              <option value="" disabled>
                Selecione…
              </option>
              {CARGAS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <span className={styles.legend}>Natureza</span>
            <div className={styles.radios}>
              {['Completa', 'Fracionada'].map((n) => (
                <label key={n} className={`${styles.radio} ${form.natureza === n ? styles.radioOn : ''}`}>
                  <input type="radio" name="natureza" value={n} checked={form.natureza === n} onChange={set('natureza')} />
                  {n}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="origem">Origem</label>
              <input id="origem" type="text" placeholder="Cidade / UF" value={form.origem} onChange={set('origem')} />
            </div>
            <div className={styles.field}>
              <label htmlFor="destino">Destino</label>
              <input id="destino" type="text" placeholder="Cidade / UF" value={form.destino} onChange={set('destino')} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} />
            </div>
            <div className={styles.field}>
              <label htmlFor="contato">E-mail ou telefone</label>
              <input id="contato" type="text" placeholder="Como falar com você" value={form.contato} onChange={set('contato')} />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="mensagem">Mensagem (opcional)</label>
            <textarea id="mensagem" rows={3} placeholder="Detalhes da carga, peso, frequência…" value={form.mensagem} onChange={set('mensagem')} />
          </div>

          {erro && (
            <p className={styles.erro} role="alert">
              {erro}
            </p>
          )}

          <button type="submit" className={styles.submit}>
            <FileText size={18} strokeWidth={2.2} aria-hidden="true" />
            Enviar solicitação
          </button>
          <p className={styles.hint}>
            <Check size={13} strokeWidth={2.6} aria-hidden="true" />
            Abre seu e-mail com os dados já preenchidos para {EMAIL}.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Cotacao;
