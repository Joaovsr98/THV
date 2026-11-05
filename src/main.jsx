import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fontes servidas pelo próprio site (mesmas famílias e pesos que vinham do Google Fonts).
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/archivo/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';

import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';

import { LanguageProvider } from './i18n/LanguageContext.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
