import React from 'react';
import Review from '../review/review.jsx';
import {reviewsPropObject} from '../../props/reviewProp.js';

const starMarkup = () => {
  const descr = [
    [5, `perfect`],
    [4, `good`],
    [3, `not bad`],
    [2, `badly`],
    [1, `terribly`]
  ];

  return descr.map((key, title) => (
    <React.Fragment key={key}>
      <input className="form__rating-input visually-hidden" name="rating" value={`${key}`} id={`${key}-stars`} type="radio" />
      <label htmlFor={`${key}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  ));
};

const Reviews = (props) => {
  const {reviews} = props;

  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.sort((a, b) => b.date - a.date).slice(0, 10)
      .map((review) => <Review key={review.id} review={review} />)}
    </ul>
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starMarkup()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  </section>;
};

Reviews.propTypes = reviewsPropObject;

export default Reviews;
