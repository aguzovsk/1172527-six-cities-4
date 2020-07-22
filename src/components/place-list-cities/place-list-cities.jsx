import React from 'react';
import PlaceList from '../place-list/place-list.jsx';
import PlaceCardCities from '../place-card-cities/place-card-cities.jsx';
import {placeListPropGeneric} from '../../props/placeProp.js';
import {getSortFunction} from '../../utils.js';

import {connect} from "react-redux";
// import {ActionCreator} from '../../reducer.js';

const PlaceListCities = (props) => {
  const {offers, sortType} = props;

  return <PlaceList
    listClass="cities__places-list tabs__content"
    renderCards={(onMouseEnter, onMouseLeave) => offers.slice()
      .sort(getSortFunction(sortType))
      .map((offer) => <PlaceCardCities
        key={offer.id}
        offer={offer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />) }
  />;
};

PlaceListCities.propTypes = placeListPropGeneric;

const mapStateToProps = (state) => ({
  sortType: state.sortType
});

export {PlaceListCities};
export default connect(mapStateToProps)(PlaceListCities);
