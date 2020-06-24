import PropTypes from 'prop-types';
import {offerProp, offersProp} from './offerProp.js';

const cardProp = PropTypes.oneOf([`cities`, `near-places`]);

const placePropObject = {
  offer: offerProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  cardType: cardProp.isRequired
};

const placeListPropObject = {
  offers: offersProp,
  cardType: cardProp.isRequired
};

export {placePropObject, placeListPropObject};
