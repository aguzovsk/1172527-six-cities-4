import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});

describe(`Place card component e2e test suite`, () => {
  it(`place card on mouse enter`, () => {
    const onMouseEnter = jest.fn((card) => card);
    const onMouseLeave = jest.fn();
    const hotel = {
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
    };

    const placeCard = shallow(
        <PlaceCard
          hotel={hotel}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );

    const article = placeCard.find(`article`);
    article.simulate(`mouseenter`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(hotel);
  });
});
