import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardNearest from './place-card-nearest.jsx';
import offer from '../../test-mock/offer.js';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`PlaceCardNearest component snapshot test.`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store} >
        <PlaceCardNearest
          offer={offer}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
