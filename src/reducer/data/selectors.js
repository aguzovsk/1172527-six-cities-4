import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getCurrentCity} from '../app/selectors';

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export const getFavorites = (state) => {
  return Array.from(state[NAME_SPACE].favorites);
};

export const getNearby = (state) => {
  return state[NAME_SPACE].nearbyOffers;
};

export const getOffersInCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => {
    return offers.filter(({city}) => city.name === currentCity.name);
  }
);
