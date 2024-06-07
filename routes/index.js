import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShopContext } from './Context/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <ShopContext>
      <App />
    </ShopContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
