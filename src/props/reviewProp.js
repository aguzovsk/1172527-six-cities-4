import PropTypes from 'prop-types';
import {personProp} from './commonProp.js';

const reviewProp = {
  id: PropTypes.number.isRequired,
  user: personProp.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};

const reviewsProp = PropTypes.arrayOf(PropTypes.exact(reviewProp));

const reviewPropObject = {
  review: PropTypes.exact(reviewProp)
};

const reviewsPropObject = {
  reviews: reviewsProp.isRequired
};

export {reviewsProp};
export {reviewPropObject, reviewsPropObject};
