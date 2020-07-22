import React from 'react';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {PlaceListCities} from './place-list-cities.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam';

const mockStore = configureStore([]);

it(`PlaceListCities snapshot test`, () => {
  const store = mockStore({
    // currentOffer: null,
    // currentCity: cities.get(`Amsterdam`),
    offers: offersAmsterdam,
    // reviews: null,
    // sortType: SortTypes.DEFAULT,
    // accountName: `Oliver.conner@gmail.com`,
    // citiesList: Array.from(cities.keys())
  });

  const tree = renderer.create(
      <Provider store={store} >
        <PlaceListCities offers={offersAmsterdam} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
