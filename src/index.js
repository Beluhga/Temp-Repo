import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/global-estilos.css';

import  { Home }  from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

