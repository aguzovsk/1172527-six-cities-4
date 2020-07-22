import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {cities, SortTypes} from '../../const.js';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

import {MemoryRouter} from 'react-router-dom';
import entries from '../../test-mock/routerEntries';

configure({adapter: new Adapter()});
const mockStore = configureStore([]);
const amsterdam = cities.get(`Amsterdam`);

it(`e2e test app`, () => {
  const store = mockStore({
    currentOffer: undefined,
    currentCity: amsterdam,
    offers: offersAmsterdam,
    reviews: [],
    sortType: SortTypes.DEFAULT,
    accountName: `Oliver.conner@gmail.com`,
    citiesList: Array.from(cities.keys()),
    hoveredOffer: offersAmsterdam[1],
  });

  const dummy = () => {};

  const app = mount(
      <MemoryRouter initialEntries={entries} initialIndex={0} >
        <Provider store={store}>
          <App
            offers={offersAmsterdam}
            currentCity={amsterdam}
            currentOffer={undefined}
            onCityChange={dummy}
            onLogoClick={dummy}
          />
        </Provider>
      </MemoryRouter>
  );

  const firstTitle = app.first(`.place-card__name a`);
  firstTitle.simulate(`click`);

  const map = app.find(`.property__map`);

  expect(map.exists()).toEqual(false);
  expect(app.find(`.place-card__name`).length).toBe(6);
  expect(app.find(`.place-card__name a`).length).toBe(6);
});
