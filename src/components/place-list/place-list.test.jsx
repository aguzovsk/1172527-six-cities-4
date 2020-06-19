import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

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

it(`Place list component snapshot test`, () => {
  const tree = renderer.create(<PlaceList hotels={hotels} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
