import {extend} from './utils.js';
import generateOffers from './mock/offers.js';
import {cityCoordinates} from './const.js';
// import cityCoordinates from './const.js';

const UNSELECTED_OFFER = -1;

const initialState = {
  currentOffer: UNSELECTED_OFFER,
  currentCity: cityCoordinates.get(`Amsterdam`),
  offers: generateOffers()
};

const ActionType = {
  SET_OFFER: `SET_OFFER`,
  SET_CITY: `SET_CITY`,
  // GET_OFFERS: `GET_OFFERS`,
  // GET_OFFER: `GET_OFFER`,
  // GET_CITIES: `GET_CITIES`,
  BACK_TO_MAIN: `BACK_TO_MAIN`
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setOffer: (offer) => ({
    type: ActionType.SET_OFFER,
    payload: offer.id
  }),
  backToMain: () => ({
    type: ActionType.BACK_TO_MAIN,
    payload: UNSELECTED_OFFER
  }),
  /* getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  getCities: () => ({
    type: ActionType.GET_CITIES,
  }), */
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFER:
      return extend(state, {
        currentOffer: action.payload
      });
    case ActionType.SET_CITY:
      if (state.currentCity === action.payload) {
        return state;
      }

      return extend(state, {
        currentCity: action.payload
      });
    case ActionType.BACK_TO_MAIN:
      if (state.currentOffer === UNSELECTED_OFFER) {
        return state;
      }

      return extend(state, {
        currentOffer: action.payload
      });
  }

  return state;
};

export {ActionCreator, reducer, UNSELECTED_OFFER};
