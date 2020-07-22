import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesSorting} from './places-sorting';
import {SortTypes} from '../../const.js';

it(`PlacesSorting component snapshot test.`, () => {
  const dummy = () => {};
  const tree = renderer.create(
      <PlacesSorting active={SortTypes.DEFAULT} onClick={dummy} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
