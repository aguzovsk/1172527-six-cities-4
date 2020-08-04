import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer, ActionCreator} from './reducer.js';

import thunk from 'redux-thunk';
import {createAPI} from './api.js';
import Offer from './models/offer';

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

api.get(`\hotels`).then((response) => {
  const data = response.data;
  const hotels = data.map((datum) => new Offer(datum));
  store.dispatch(ActionCreator.loadHotels(hotels));
});
// store.dispatch(ActionCreator.checkAuth(api));

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
