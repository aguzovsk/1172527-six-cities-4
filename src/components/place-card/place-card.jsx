import React from 'react';
import {placePropObject} from '../../props/placeProp.js';
import {typeTextUnfold} from '../../utils.js';
import {ratingToPercentages} from '../../utils.js';

const PlaceCard = (props) => {
  const {offer, onMouseLeave, onMouseEnter, cardType} = props;
  const {title, type, previewImage, price, rating, isPremium, isFavourite} = offer;

  return <article
    className={`${cardType === `cities` ? `cities__place-card` : `near-places__card`} place-card`}
    onMouseEnter={() => onMouseEnter(offer)}
    onMouseLeave={() => onMouseLeave()}
  >
    {isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{`€${price}`}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${isFavourite && `place-card__bookmark-button--active`}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavourite ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: ratingToPercentages(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{typeTextUnfold(type)}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = placePropObject;

export default PlaceCard;
