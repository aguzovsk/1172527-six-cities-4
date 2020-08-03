import React from 'react';
import Map from '../map/map.jsx';
import {offerPropExact, offersProp} from '../../props/offerProp.js';


const MapProperty = (props) => {
  const {offer, offers} = props;

  return <Map
    city={offer.city}
    currentPlace={offer}
    offers={offers.slice(0, 3)}
    mapClass="property__map"
  />;
};


MapProperty.propTypes = {
  offer: offerPropExact,
  offers: offersProp,
  // currentPlace: PropTypes.exact(offerProp)
};

export default MapProperty;
