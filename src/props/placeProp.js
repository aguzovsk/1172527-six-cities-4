import PropTypes from 'prop-types';
import {offerProp, offersProp} from './offerProp.js';

const cardProp = PropTypes.oneOf([`cities`, `near-places`]);

const placePropObject = {
  offer: PropTypes.exact(offerProp),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  cardType: cardProp,
  onTitleClick: PropTypes.func.isRequired
};

const placeListPropObject = {
  offers: offersProp,
  cardType: cardProp.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export {placePropObject, placeListPropObject};
