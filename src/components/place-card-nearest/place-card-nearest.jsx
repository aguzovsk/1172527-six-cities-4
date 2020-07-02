import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import {placePropGeneric} from '../../props/placeProp.js';

const PlaceCardNearest = (props) => {

  return <PlaceCard {...props}
    cardClass="near-places__card"
    imageWrapperClass="near-places__image-wrapper"
  />;
};

PlaceCardNearest.propTypes = placePropGeneric;

export default PlaceCardNearest;
