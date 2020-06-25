import PropTypes from 'prop-types';
import {personProp} from './commonProp.js';
import {rentTypes} from '../const.js';

const typeProp = PropTypes.oneOf(rentTypes).isRequired;
const goodsProp = PropTypes.arrayOf(PropTypes.string);
const imagesProp = PropTypes.arrayOf(PropTypes.string);

const locationProp = PropTypes.exact({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
});

const cityProp = PropTypes.exact({
  name: PropTypes.string.isRequired,
  location: locationProp
});

const offerBasic = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: typeProp,
  rating: PropTypes.number.isRequired
};

const offerExtended = {
  id: PropTypes.number.isRequired,
  city: cityProp,
  location: locationProp,
  images: imagesProp.isRequired,
  // title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // isPremium: PropTypes.bool.isRequired,
  // type: typeProp,
  // rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  // price: PropTypes.number.isRequired,
  goods: goodsProp.isRequied,
  host: personProp.isRequired,
};

const offerProp = Object.assign({}, offerBasic, offerExtended);

// const offerPropObject = {
//   offer: PropTypes.exact(offerProp)
// };

const offersProp = PropTypes.arrayOf(PropTypes.exact(offerProp));

const offersPropObject = {
  offers: offersProp
};

export {offerProp, offersProp};
export {offersPropObject};
