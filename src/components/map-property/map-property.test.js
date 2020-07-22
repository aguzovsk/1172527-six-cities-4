import React from 'react';
import renderer from 'react-test-renderer';
import MapProperty from './map-property.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`Map property snapshot test.`, () => {
  const store = mockStore({
    currentOffer: offersAmsterdam[0],
    hoveredOffer: offersAmsterdam[1],
  });

  const tree = renderer.create(
      (<Provider store={store}>
        <MapProperty
          offers={offersAmsterdam}
          currentPlace={offersAmsterdam[0]}
        />
      </Provider>),
      {
        createNodeMock() {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
