import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

describe(`Test app component`, () => {
  it(`App component test with offers mock`, () => {
    const tree = renderer.create(
        (<App offers={offersAmsterdam} />),
        {
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
