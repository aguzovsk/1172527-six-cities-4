import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app.jsx';

import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
// import {Operation as UserOperation, ActionCreator} from './reducer/user/user';

import {createAPI} from './api.js';

import {AuthorizationStatus} from './const';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
}

// const api = createAPI(() => {
//   store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
// });

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
// store.dispatch(UserOperation.checkAuth());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
