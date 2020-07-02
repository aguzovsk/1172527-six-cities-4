import React from 'react';
import renderer from 'react-test-renderer';
import PlaceListCities from './place-list-cities.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam';

it(`PlaceListCities snapshot test`, () => {
  const tree = renderer.create(
      <PlaceListCities offers={offersAmsterdam} onTitleClick={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
