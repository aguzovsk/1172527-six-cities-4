import React from 'react';
import renderer from 'react-test-renderer';
import MapProperty from './map-property.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

it(`Map property snapshot test.`, () => {
  const tree = renderer.create(
      (<MapProperty
        offers={offersAmsterdam}
        currentPlace={offersAmsterdam[0]}
      />),
      {
        createNodeMock() {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
