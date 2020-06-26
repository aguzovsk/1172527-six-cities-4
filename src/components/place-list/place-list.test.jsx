import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

it(`Place list component snapshot test`, () => {
  const onTitleClick = () => {};

  const tree = renderer.create(
      <PlaceList
        offers={offersAmsterdam}
        onTitleClick={onTitleClick}
        cardType="near-places"
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
