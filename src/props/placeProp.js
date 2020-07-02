import PropTypes from 'prop-types';
import {offerProp, offersProp} from './offerProp.js';

// const cardProp = PropTypes.oneOf([`cities`, `near-places`]);

const placePropGeneric = {
  offer: PropTypes.exact(offerProp),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

const placePropObject = Object.assign({}, placePropGeneric, {
  cardClass: PropTypes.string.isRequired,
  imageWrapperClass: PropTypes.string.isRequired
});

const placeListPropGeneric = {
  offers: offersProp,
  onTitleClick: PropTypes.func.isRequired
};

// const placeListPropObject = Object.assign({}, placeListPropGeneric, {

// });

export {placePropGeneric, placeListPropGeneric};
export {placePropObject};
