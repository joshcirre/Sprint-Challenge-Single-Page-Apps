import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <CSSReset />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
