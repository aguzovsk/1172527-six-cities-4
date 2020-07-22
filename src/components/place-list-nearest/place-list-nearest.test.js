import React from 'react';
import renderer from 'react-test-renderer';
import PlaceListNearest from './place-list-nearest.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`PlaceListNearest snapshot test`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store} >
        <PlaceListNearest offers={offersAmsterdam} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
