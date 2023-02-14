import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

const container =   document.getElementById('root')
const root = createRoot(container);
root.render( <React.StrictMode>
  <App />
</React.StrictMode>)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//  container
// );