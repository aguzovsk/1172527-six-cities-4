import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const hotels = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: `93%`,
    isPremium: true,
    isFavourite: false,
    city: {
      name: `Amsterdam`,
    }
  },
  {
    id: 2,
    title: `Wood and stone place`,
    type: `Private room`,
    previewImage: `img/room.jpg`,
    price: 80,
    rating: `80%`,
    isPremium: false,
    isFavourite: true,
    city: {
      name: `Amsterdam`,
    }
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    previewImage: `img/apartment-02.jpg`,
    price: 132,
    rating: `80%`,
    isPremium: false,
    isFavourite: false,
    city: {
      name: `Amsterdam`,
    }
  }
];

describe(`Test PlaceCard component`, () => {
  const onMouseEnter = () => {};
  const onMouseLeave = () => {};

  it(`Test PlaceCard with first hotel, i.e. is premium, not favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          hotel={hotels[0]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with second hotel, i.e. not premium, is favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          hotel={hotels[1]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Test PlaceCard with third hotel, i.e. not premium, not favourite`, () => {
    const tree = renderer.create(
        <PlaceCard
          hotel={hotels[2]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
