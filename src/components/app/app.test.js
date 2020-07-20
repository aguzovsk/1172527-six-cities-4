import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {cities, SortTypes} from '../../const.js';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

import {MemoryRouter} from 'react-router-dom';
import entries from '../../test-mock/routerEntries';

const mockStore = configureStore([]);

describe(`Test app component`, () => {
  const amsterdam = cities.get(`Amsterdam`);

  it(`App component test with offers mock`, () => {
    const store = mockStore({
      currentOffer: undefined,
      currentCity: amsterdam,
      offers: offersAmsterdam,
      reviews: [],
      sortType: SortTypes.DEFAULT,
      accountName: `Oliver.conner@gmail.com`,
      citiesList: Array.from(cities.keys())
    });

    const dummy = () => {};

    const tree = renderer.create(
        (
          <MemoryRouter initialEntries={entries} initialIndex={0} >
            <Provider store={store}>
              <App
                offers={offersAmsterdam}
                currentCity={amsterdam}
                currentOffer={undefined}
                onCityChange={dummy}
                onTitleClick={dummy}
                onLogoClick={dummy}
              />
            </Provider>
          </MemoryRouter>
        ),
        {
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
