import React from 'react';
import renderer from 'react-test-renderer';
import PlaceListNearest from './place-list-nearest.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam';

it(`PlaceListNearest snapshot test`, () => {
  const tree = renderer.create(
      <PlaceListNearest offers={offersAmsterdam} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
