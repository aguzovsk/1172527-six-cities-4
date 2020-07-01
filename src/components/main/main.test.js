import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

describe(`Test main component`, () => {
  it(`Main is being tested with offers mock`, () => {
    const onTitleClick = () => {};
    const tree = renderer.create(
        (<Main offers={offersAmsterdam} onTitleClick={onTitleClick} />),
        {
          createNodeMock: () => document.createElement(`div`)
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
