import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {generateOffers} from './mock/offers.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';

const offers = generateOffers(5);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
