import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {cities, SortTypes} from '../../const.js';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

it(`e2e test app`, () => {
  const store = mockStore({
    // currentOffer: null,
    currentCity: cities.get(`Amsterdam`),
    offers: offersAmsterdam,
    // reviews: null,
    sortType: SortTypes.DEFAULT,
    accountName: `Oliver.conner@gmail.com`,
    citiesList: Array.from(cities.keys())
  });

  const app = mount(
    <Provider store={store} >
      <App offers={offersAmsterdam} />
    </Provider>
  );

  const firstTitle = app.first(`.place-card__name a`);
  firstTitle.simulate(`click`);

  const map = app.find(`.property__map`);

  expect(map.exists()).toEqual(false);
  expect(app.find(`.place-card__name`).length).toBe(6);
  expect(app.find(`.place-card__name a`).length).toBe(6);
});
