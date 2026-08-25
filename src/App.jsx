import { useReveal } from './hooks/useReveal.js';
import { useLang } from './i18n/LanguageContext.jsx';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppFloat from './components/layout/WhatsAppFloat.jsx';
import LanguageGate from './components/layout/LanguageGate.jsx';

import Hero from './components/sections/Hero.jsx';
import Travessia from './components/sections/Travessia.jsx';
import Sobre from './components/sections/Sobre.jsx';
import Servicos from './components/sections/Servicos.jsx';
import Processo from './components/sections/Processo.jsx';
import Frota from './components/sections/Frota.jsx';
import Galeria from './components/sections/Galeria.jsx';
import RedeEscritorios from './components/sections/RedeEscritorios.jsx';
import FAQ from './components/sections/FAQ.jsx';
import Cotacao from './components/sections/Cotacao.jsx';
import Contato from './components/sections/Contato.jsx';

export default function App() {
  const { lang } = useLang();
  useReveal(lang);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Travessia />
        <Sobre />
        <Servicos />
        <Processo />
        <Frota />
        <Galeria />
        <RedeEscritorios />
        <FAQ />
        <Cotacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
      <LanguageGate />
    </>
  );
}
