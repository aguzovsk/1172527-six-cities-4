import React from 'react';
import {placePropObject} from '../../props/placeProp.js';
import {typeTextUnfold} from '../../utils.js';
import {ratingToPercentages} from '../../utils.js';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const PlaceCard = (props) => {
  const {offer, cardClass, imageWrapperClass} = props;
  const {onMouseLeave, onMouseEnter, onTitleClick} = props;
  const {title, type, previewImage, price, rating, isPremium, isFavorite} = offer;

  return <article
    className={`${cardClass} place-card`}
    onMouseEnter={() => onMouseEnter(offer)}
    onMouseLeave={() => onMouseLeave()}
  >
    {isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className={`${imageWrapperClass} place-card__image-wrapper`}>
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
        <button className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: ratingToPercentages(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={() => onTitleClick(offer)} >{title}</a>
      </h2>
      <p className="place-card__type">{typeTextUnfold(type)}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = placePropObject;

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter(offer) {
    dispatch(ActionCreator.setHoveredOffer(offer));
  },

  onMouseLeave() {
    dispatch(ActionCreator.unsetHoveredOffer());
  },

  onTitleClick(offer) {
    dispatch(ActionCreator.setOffer(offer));
  },
});

export {PlaceCard};
export default connect(undefined, mapDispatchToProps)(PlaceCard);
