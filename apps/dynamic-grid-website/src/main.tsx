import React from 'react';
import ReactDOM from 'react-dom/client';

import { SvgStore } from './components/svg-store';
import App from './App.tsx';
import { GlobalStyles } from './global-styles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SvgStore />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
