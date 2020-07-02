import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import offer from '../../test-mock/offer.js';

configure({adapter: new Adapter()});

describe(`Place card component e2e test suite`, () => {
  it(`place card on mouse enter`, () => {
    const onMouseEnter = jest.fn((card) => card);
    const onMouseLeave = jest.fn();
    const onTitleClick = () => {};

    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTitleClick={onTitleClick}
          cardClass="cities__place-card"
          imageWrapperClass="cities__image-wrapper"
        />
    );

    const article = placeCard.find(`article`);
    article.simulate(`mouseenter`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(offer);
  });
});
