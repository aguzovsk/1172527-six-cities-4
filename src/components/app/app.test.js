import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {cities, SortTypes} from '../../const.js';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

// import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore([]);

jest.mock(`react-router-dom`, () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: `/`,
    search: ``,
    hash: ``,
    state: null,
    key: ``
    // key: `5nvxpbdafa`
  }),
  matchPath: jest.fn().mockReturnValue(null)
  // useLocation: jest.fn().mockReturnValue(null),
}));

// jest.mock(`leaflet`);

describe(`Test app component`, () => {
  it(`App component test with offers mock`, () => {
    const store = mockStore({
      currentOffer: undefined,
      currentCity: cities.get(`Amsterdam`),
      offers: offersAmsterdam,
      reviews: [],
      sortType: SortTypes.DEFAULT,
      accountName: `Oliver.conner@gmail.com`,
      citiesList: Array.from(cities.keys())
    });

    const dummy = () => {};

    const tree = renderer.create(
        (
          // <MemoryRouter>
          <Provider store={store}>
            <App offers={offersAmsterdam} onCityChange={dummy} onTitleClick={dummy} onLogoClick={dummy} />
          </Provider>
          // </MemoryRouter>
        ),
        {
          // wrapper: MemoryRouter,
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
