import React from 'react';
import PropTypes from 'prop-types';
import {hotelPropType} from '../../props/props.jsx';
import {typeTextUnfold} from '../../utils.js';

const PlaceCard = (props) => {
  const {hotel, onMouseLeave, onMouseEnter} = props;
  const {title, type, previewImage, price, rating, isPremium, isFavourite} = hotel;

  return <article
    className="cities__place-card place-card"
    onMouseEnter={() => onMouseEnter(hotel)}
    onMouseLeave={() => onMouseLeave()}
  >
    {isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
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
          <span style={{width: rating}}></span>
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

PlaceCard.propTypes = {
  hotel: hotelPropType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
