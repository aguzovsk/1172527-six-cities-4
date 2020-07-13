import React from 'react';
import PlaceList from '../place-list/place-list.jsx';
import PlaceCardCities from '../place-card-cities/place-card-cities.jsx';
import {placeListPropGeneric} from '../../props/placeProp.js';
import {getSortFunction} from '../../utils.js';

import {connect} from "react-redux";
import {ActionCreator} from '../../reducer.js';

const PlaceListCities = (props) => {
  const {offers, sortType} = props;
  const {onTitleClick} = props;

  return <PlaceList
    listClass="cities__places-list tabs__content"
    renderCards={(onMouseEnter, onMouseLeave) => offers.slice()
      .sort(getSortFunction(sortType))
      .map((offer) => <PlaceCardCities
        key={offer.id}
        offer={offer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTitleClick={onTitleClick}
      />) }
  />;
};

PlaceListCities.propTypes = placeListPropGeneric;

const mapStateToProps = (state) => ({
  offers: state.offers,
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(offer) {
    dispatch(ActionCreator.setOffer(offer));
  }
});

export {PlaceListCities};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceListCities);
