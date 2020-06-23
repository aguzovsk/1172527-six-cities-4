import PropTypes from 'prop-types';

// const goodsProp = PropTypes.arrayOf(PropTypes.string);
// const imagesProp = PropTypes.arrayOf(PropTypes.string);
const typeProp = PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired;
const city = PropTypes.exact({
  name: PropTypes.string.isRequired
});


// const hostProp = personProp;

// const offerBasic = {
//   id: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   isPremium: PropTypes.bool.isRequired,
//   price: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   type: typeProp,
//   rating: PropTypes.number.isRequired
// };

// const offerExtended = {
//   id: PropTypes.number.isRequired,
//   images: imagesProp.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   isPremium: PropTypes.bool.isRequired,
//   type: typeProp,
//   rating: PropTypes.number.isRequired,
//   bedrooms: PropTypes.number.isRequired,
//   maxAdults: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   goods: goodsProp.isRequied,
//   host: hostProp.isRequired,
// };

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
export {reviewProp, reviewsPropObject} from './reviewProp.js';
