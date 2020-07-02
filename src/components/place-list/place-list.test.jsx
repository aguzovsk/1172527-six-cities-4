import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

it(`Place list component snapshot test`, () => {
  const renderProp = () => {};

  const tree = renderer.create(
      <PlaceList
        renderCards={renderProp}
        listClass="near-places__list"
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
