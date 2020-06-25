import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {generateOffers} from './mock/offers.js';

const offers = generateOffers(5);

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
      />,
      document.querySelector(`#root`)
  );
};

init();
