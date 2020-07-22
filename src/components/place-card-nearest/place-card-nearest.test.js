import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardNearest from './place-card-nearest.jsx';
import offer from '../../test-mock/offer.js';

it(`PlaceCardNearest component snapshot test.`, () => {
  const tree = renderer.create(
      <PlaceCardNearest
        offer={offer}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
