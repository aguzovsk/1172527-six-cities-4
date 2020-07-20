import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';
import {MemoryRouter} from 'react-router-dom';
import entries from '../../test-mock/routerEntries';

// jest.mock(`react-router-dom`, () => ({
//   __esModule: true,
//   useLocation: jest.fn().mockReturnValue({
//     pathname: `/details`,
//     search: ``,
//     hash: ``,
//     state: null,
//     key: ``
//     // key: `5nvxpbdafa`
//   }),
//   matchPath: jest.fn().mockReturnValue(null)
// }));

it(`Header component snapshot, account undefined`, () => {
  const tree = renderer.create(
      <MemoryRouter initialEntries={entries} initialIndex={0}>
        <Header
          onLogoClick={() => {}}
          accountName={undefined}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Header component snapshot, account heheshki`, () => {
  const tree = renderer.create(
      <MemoryRouter initialEntries={entries} initialIndex={1} >
        <Header
          onLogoClick={() => {}}
          accountName={`heheshki@gmail.com`}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
