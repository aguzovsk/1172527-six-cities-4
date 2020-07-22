import React from 'react';
import Map from '../map/map.jsx';
import {offersProp} from '../../props/offerProp.js';


const MapProperty = (props) => {
  const {offers} = props;

  return <Map
    offers={offers.slice(0, 3)}
    mapClass="property__map"
  />;
};


MapProperty.propTypes = {
  offers: offersProp,
  // currentPlace: PropTypes.exact(offerProp)
};

export default MapProperty;
