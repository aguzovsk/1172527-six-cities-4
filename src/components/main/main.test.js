import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {hotels} from '../../mock/hotels.js';

describe(`Test main component`, () => {
  it(`Main is being tested with hotels mock`, () => {
    const tree = renderer.create(<Main hotels={hotels} />);

    expect(tree).toMatchSnapshot();
  });
});
