import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const app = (
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));