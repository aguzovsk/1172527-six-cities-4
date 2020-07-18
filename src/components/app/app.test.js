import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {cities, SortTypes} from '../../const.js';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

const mockStore = configureStore([]);

describe(`Test app component`, () => {
  it(`App component test with offers mock`, () => {
    const store = mockStore({
      // currentOffer: null,
      currentCity: cities.get(`Amsterdam`),
      offers: offersAmsterdam,
      // reviews: null,
      sortType: SortTypes.DEFAULT,
      accountName: `Oliver.conner@gmail.com`,
      citiesList: Array.from(cities.keys())
    });

    const tree = renderer.create(
        (
          <Provider store={store}>
            <App offers={offersAmsterdam} />
          </Provider>
        ),
        {
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
