import React from 'react';
import renderer from 'react-test-renderer';
import {Details} from './details.jsx';
// import {MemoryRouter} from 'react-router-dom';
// import leaflet from 'leaflet';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import offersAmsterdam from '../../test-mock/offers-amsterdam.js';
import reviews from '../../test-mock/reviews.js';

jest.mock(`react-router-dom`, () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: `/details`,
    search: ``,
    hash: ``,
    state: null,
    key: ``
    // key: `5nvxpbdafa`
  }),
  matchPath: jest.fn().mockReturnValue(null)
}));

const mockStore = configureStore([]);

it(`details component snapshot test`, () => {
  const offer = offersAmsterdam[0];
  const store = mockStore({
    accountName: undefined,
    currentCity: undefined,
    currentOffer: offersAmsterdam[1],
    hoveredOffer: offersAmsterdam[2]
  });
  const tree = renderer.create(
      (
        <Provider store={store} >
          <Details
            offer={offer}
            reviews={reviews.slice(0, 5)}
            offers={offersAmsterdam}
          />
        </Provider>
      ),
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
