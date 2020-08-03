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
  previewImage: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
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
  goods: goodsProp,
  host: personProp.isRequired,
};

const offerProp = Object.assign({}, offerBasic, offerExtended);
const offerPropExact = PropTypes.exact(offerProp);

const offerPropObject = {
  offer: PropTypes.exact(offerProp)
};

const offersProp = PropTypes.arrayOf(PropTypes.exact(offerProp));

const offersPropObject = {
  offers: offersProp
};

const offerPropObjectWithCallback = {
  offer: PropTypes.exact(offerProp),
  // onTitleClick: PropTypes.func.isRequired
};

const offersPropObjectWithCallback = {
  offers: offersProp,
  // onTitleClick: PropTypes.func.isRequired
};

export {cityProp};
export {offerPropExact};
export {offerProp, offersProp};
export {offersPropObject, offerPropObject};
export {offerPropObjectWithCallback, offersPropObjectWithCallback};
