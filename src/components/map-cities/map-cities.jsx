import React from 'react';
import Map from '../map/map.jsx';
import {offersProp, cityProp} from '../../props/offerProp.js';

const MapCities = (props) => {
  const {offers, currentCity} = props;

  return <Map
    city={currentCity}
    offers={offers}
    currentPlace={undefined}
    mapClass="cities__map"
  />;
};

MapCities.propTypes = {
  offers: offersProp,
  currentCity: cityProp
};

export default MapCities;
