import React from 'react';
import PlaceList from '../place-list/place-list.jsx';
import PlaceCardCities from '../place-card-cities/place-card-cities.jsx';
import {placeListPropGeneric} from '../../props/placeProp.js';

const PlaceListCities = (props) => {
  const {offers, onTitleClick} = props;

  return <PlaceList
    listClass="cities__places-list tabs__content"
    renderCards={(onMouseEnter, onMouseLeave) => offers.map((offer) => <PlaceCardCities
      key={offer.id}
      offer={offer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTitleClick={onTitleClick}
    />) }
  />;
};

PlaceListCities.propTypes = placeListPropGeneric;

export default PlaceListCities;
