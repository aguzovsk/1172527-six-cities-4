import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';
import {cities} from '../../const.js';
import {SortTypes} from '../../const.js';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
// import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore([]);

jest.mock(`react-router-dom`, () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: `/`,
    search: ``,
    hash: ``,
    state: null,
    key: `5nvxpbdafa`
  }),
  matchPath: jest.fn().mockReturnValue(null)
}));

describe(`Test main component`, () => {
  const amsterdam = cities.get(`Amsterdam`);

  const store = mockStore({
    active: SortTypes.DEFAULT,
    citiesList: Array.from(cities.keys()),
    currentCity: amsterdam
  });

  it(`Main is being tested with offers mock`, () => {
    const tree = renderer.create(
        (<Provider store={store}>
          <Main offers={offersAmsterdam} currentCity={amsterdam} />
        </Provider>),
        {
          // wrapper: MemoryRouter,
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
