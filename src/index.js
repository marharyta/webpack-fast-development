import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const container = document.getElementById('app');
render(<App />, container);

if (module.hot) {
  module.hot.accept('./App', function() {
    const NewApp = require('./App').App;
    render(<NewApp />, container);
  });
}
