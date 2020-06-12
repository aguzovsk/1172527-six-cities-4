import PropTypes from 'prop-types';

const city = {
  name: PropTypes.string.isRequired
};

const hotelProp = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  city,
  isPremium: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired
};

const hotelsProp = PropTypes.arrayOf(PropTypes.shape(hotelProp));

const hotelsPropObject = {
  hotels: hotelsProp
};

export {hotelProp, hotelsPropObject};
