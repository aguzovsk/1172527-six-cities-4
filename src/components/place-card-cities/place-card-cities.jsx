import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import {placePropGeneric} from '../../props/placeProp.js';

const PlaceCardCities = (props) => {

  return <PlaceCard {...props}
    cardClass="cities__place-card"
    imageWrapperClass="cities__image-wrapper"
  />;
};

PlaceCardCities.propTypes = placePropGeneric;

export default PlaceCardCities;
