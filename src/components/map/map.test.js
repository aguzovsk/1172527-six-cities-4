import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';
import {cities} from '../../const.js';

it(`Map snapshot test on Amsterdam`, () => {
  const tree = renderer.create(
      (<Map city={cities.get(`Amsterdam`)} offers={offersAmsterdam} />),
      {
        createNodeMock() {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
