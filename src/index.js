import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScoreContextProvider from './context/scoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </React.StrictMode>
);
