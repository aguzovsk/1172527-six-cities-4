import React from 'react';
import Map from '../map/map.jsx';
import PropTypes from 'prop-types';
import {offerProp, offersProp} from '../../props/offerProp.js';

const MapProperty = (props) => {
  const {offers, currentPlace} = props;

  return <Map
    city={currentPlace.city}
    offers={offers.slice(0, 3)}
    currentPlace={currentPlace}
    mapClass="property__map"
  />;
};


MapProperty.propTypes = {
  offers: offersProp,
  currentPlace: PropTypes.exact(offerProp)
};

export default MapProperty;
