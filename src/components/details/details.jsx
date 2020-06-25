import React from 'react';
import Header from '../header/header.jsx';
import {typeTextUnfold} from '../../utils.js';
import PlaceList from '../place-list/place-list.jsx';
import Reviews from '../reviews/reviews.jsx';
import {generateReviews} from '../../mock/reviews.js';
import {generateOffers} from '../../mock/offers.js';
import {ratingToPercentages} from '../../utils.js';
import {offerPropObject} from '../../props/offerProp.js';

const Details = ({offer}) => {
  const {goods, bedrooms, maxAdults, type, price, title, isPremium, rating, host, images} = offer;
  const {description} = offer;
  const offers = generateOffers(3);
  const reviews = generateReviews(1);

  return <div className="page">
    <Header />

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, 6).map((image, idx) => (
              <div key={idx} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: ratingToPercentages(rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {typeTextUnfold(type)}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={`${good}`} className="property__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
              </div>
              <div className="property__description">
                {description.split(/[\.!\?]+\s+/).map((sentence, idx) => (
                  <p key={idx} className="property__text">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>

            <Reviews reviews={reviews} />
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlaceList offers={offers} cardType="near-places" />
        </section>
      </div>
    </main>
  </div>;
};

Details.propTypes = offerPropObject;

export default Details;
