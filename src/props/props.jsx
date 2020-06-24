import PropTypes from 'prop-types';
import {rentTypes} from '../const.js';

const typeProp = PropTypes.oneOf(rentTypes).isRequired;
const city = PropTypes.exact({
  name: PropTypes.string.isRequired
});

const hotelProp = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: typeProp,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  city: city.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired
};

const hotelPropType = PropTypes.exact(hotelProp);

const hotelsProp = PropTypes.arrayOf(PropTypes.exact(hotelProp));

const cardProp = PropTypes.oneOf([`cities`, `near-places`]);

const hotelPropObject = {
  hotel: hotelPropType,
};

const placePropObject = {
  hotel: hotelPropType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  cardType: cardProp.isRequired
};

const hotelsPropObject = {
  hotels: hotelsProp
};

const placeListPropObject = {
  hotels: hotelsProp,
  cardType: cardProp.isRequired
};

export {hotelPropType, hotelPropObject, hotelsPropObject};
export {placePropObject, placeListPropObject};
