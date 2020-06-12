import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {hotels} from './mock/hotels.js';

const init = () => {
  ReactDOM.render(
    <App
      hotels={hotels}
    />,
    document.querySelector(`#root`)
  );
};

init();
