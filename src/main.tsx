import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
const x = 12;
console.log(x);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
