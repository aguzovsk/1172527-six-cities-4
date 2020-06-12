import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import {hotels} from '../../mock/hotels.js';

describe(`Test PlaceCard component`, () => {
  it(`Test PlaceCard with first hotel, i.e. is premium, not favourite`, () => {
    const tree = renderer.create(<PlaceCard hotel={hotels[0]}/>);

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with second hotel, i.e. not premium, is favourite`, () => {
    const tree = renderer.create(<PlaceCard hotel={hotels[1]}/>);

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with third hotel, i.e. not premium, not favourite`, () => {
    const tree = renderer.create(<PlaceCard hotel={hotels[2]}/>);

    expect(tree).toMatchSnapshot();
  });
});
