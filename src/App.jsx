import { useReveal } from './hooks/useReveal.js';
import { useLang } from './i18n/LanguageContext.jsx';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Hero from './components/sections/Hero.jsx';
import Timeline from './components/sections/Timeline.jsx';
import Servicos from './components/sections/Servicos.jsx';
import MapaBrasil from './components/sections/MapaBrasil.jsx';
import Seguranca from './components/sections/Seguranca.jsx';
import Frota from './components/sections/Frota.jsx';

/* ---------------------------------------------------------------------
   Construção em andamento. Só entram no ar as seções já vestidas com a
   identidade THV. As demais (base da Mondel) ficam fora do render até
   serem reconstruídas, para não exibir conteúdo/dados de outra empresa.

   Ordem-alvo da narrativa:
   Hero ✓ · A THV (Sobre) · História (Timeline ✓) · Serviços ✓ ·
   Força × Precisão · Mapa do Brasil · Frota · Segurança & Tecnologia ·
   Responsabilidade · Processo · Cotação · Contato
   --------------------------------------------------------------------- */

export default function App() {
  const { lang } = useLang();
  useReveal(lang);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Servicos />
        <MapaBrasil />
        <Seguranca />
        <Frota />
      </main>
      <Footer />
    </>
  );
}
