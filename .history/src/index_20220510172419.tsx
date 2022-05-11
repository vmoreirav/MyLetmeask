import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './services/firebase';

import './styles/global.scss'; // Pode importar arquivo CSS dentro de qualquer componente de dentro da aplicação

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

