import React from 'react';
import PlaceList from '../place-list/place-list.jsx';
import PlaceCardNearest from '../place-card-nearest/place-card-nearest.jsx';
import {placeListPropGeneric} from '../../props/placeProp.js';

const PlaceListNearest = (props) => {
  const {offers} = props;

  return <PlaceList
    listClass="near-places__list"
    renderCards={(onMouseEnter, onMouseLeave) => offers.map((offer) => <PlaceCardNearest
      key={offer.id}
      offer={offer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />) }
  />;
};

PlaceListNearest.propTypes = placeListPropGeneric;

export default PlaceListNearest;
