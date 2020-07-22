import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardCities from './place-card-cities.jsx';
import offer from '../../test-mock/offer.js';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`PlaceCardCities snapshit test`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store} >
        <PlaceCardCities
          offer={offer}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
