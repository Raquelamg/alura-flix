import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from 'routes';
import PaginaProvider from "contexto/nuevaPagina";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <PaginaProvider>
    <AppRoutes/>
    </PaginaProvider>
  </React.StrictMode>
  
);

