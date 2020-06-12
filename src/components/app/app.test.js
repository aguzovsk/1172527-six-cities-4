import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {hotels} from '../../mock/hotels.js';

describe(`Test app component`, () => {
  it(`App component test with hotels mock`, () => {
    const tree = renderer.create(<App hotels={hotels} />);

    expect(tree).toMatchSnapshot();
  });
});
