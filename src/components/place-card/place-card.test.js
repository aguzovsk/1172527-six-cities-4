import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

describe(`Test PlaceCard component`, () => {
  const onMouseEnter = () => {};
  const onMouseLeave = () => {};
  const onTitleClick = () => {};

  it(`Test PlaceCard with first hotel, i.e. is premium, not favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          offer={offersAmsterdam[0]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTitleClick={onTitleClick}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with second hotel, i.e. not premium, is favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          offer={offersAmsterdam[1]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTitleClick={onTitleClick}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with third hotel, i.e. not premium, not favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          offer={offersAmsterdam[2]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTitleClick={onTitleClick}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
