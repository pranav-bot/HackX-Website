
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import "./index.css"
import Events from './pages/events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Events />

  </React.StrictMode>
);