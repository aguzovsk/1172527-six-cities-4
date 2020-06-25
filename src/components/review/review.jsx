import React from 'react';
import {ratingToPercentages} from '../../utils.js';
import {getYearMonthDay, getMonthYear} from '../../utils.js';
import {reviewPropObject} from '../../props/reviewProp.js';

const Review = ({review}) => {
  const {user, rating, comment, date} = review;

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: ratingToPercentages(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {comment}
      </p>
      <time className="reviews__time" dateTime={getYearMonthDay(date)}>{getMonthYear(date)}</time>
    </div>
  </li>;
};

Review.propTypes = reviewPropObject;

export default Review;
