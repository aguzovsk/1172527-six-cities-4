import PropTypes from 'prop-types';

const city = {
  name: PropTypes.string.isRequired
};

const hotelProp = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  city: PropTypes.exact(city).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired
};

const hotelPropType = PropTypes.exact(hotelProp);

const hotelsProp = PropTypes.arrayOf(PropTypes.exact(hotelProp));

const hotelPropObject = {
  hotel: hotelPropType
};

const hotelsPropObject = {
  hotels: hotelsProp
};

export {hotelPropType, hotelPropObject, hotelsPropObject};
