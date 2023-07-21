import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Myprovider } from '../src/context/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myprovider>
    <App/>
    </Myprovider>
  </React.StrictMode>
);