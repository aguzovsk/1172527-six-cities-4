import React from 'react';
import Map from '../map/map.jsx';

const MapCities = (props) => {
  const {offers, currentPlace} = props;

  return <Map
    city={currentPlace.city}
    offers={offers}
    mapClass="cities__map"
  />;
};

export default MapCities;
