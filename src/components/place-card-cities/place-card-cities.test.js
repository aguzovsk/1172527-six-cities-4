import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardCities from './place-card-cities.jsx';
import offer from '../../test-mock/offer.js';

it(`PlaceCardCities snapshit test`, () => {
  const tree = renderer.create(
      <PlaceCardCities
        offer={offer}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
