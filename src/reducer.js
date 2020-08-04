import {extend} from './utils.js';
import {generateOffers} from './mock/offers.js';
import {cities, SortTypes} from './const.js';
import {generateReviews} from './mock/reviews.js';
import {UNSELECTED_OFFER} from './const';

const generatedOffers = generateOffers();

const initialState = {
  currentOffer: UNSELECTED_OFFER, // should be removed, or updated
  hoveredOffer: undefined,
  currentCity: cities.get(`Amsterdam`), // should be removed, or updated
  // offers: generatedOffers,
  offers: [],
  reviews: generateReviews(1),
  sortType: SortTypes.DEFAULT,
  accountName: undefined,
  citiesList: Array.from(cities.keys())
};

const ActionType = {
  SET_OFFER: `SET_OFFER`,
  SET_CITY: `SET_CITY`,
  BACK_TO_MAIN: `BACK_TO_MAIN`,
  TO_LOGIN_PAGE: `TO_LOGIN_PAGE`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SET_HOVER_OFFER: `SET_HOVER_OFFER`,
  UNSET_HOVER_OFFER: `UNSET_HOVER_OFFER`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHECK_AUTH: `CHECK_AUTH`,
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setOffer: (offer) => ({
    type: ActionType.SET_OFFER,
    payload: offer
  }),
  backToMain: () => ({
    type: ActionType.BACK_TO_MAIN,
    payload: UNSELECTED_OFFER
  }),
  changeSorting: (sortType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortType
  }),
  setHoveredOffer: (offer) => ({
    type: ActionType.SET_HOVER_OFFER,
    payload: offer
  }),
  unsetHoveredOffer: () => ({
    type: ActionType.UNSET_HOVER_OFFER,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_OFFERS,
    payload: hotels
  }),
  // checkAuth: (api) => ({
  //   type: ActionCreator.CHECK_AUTH,
  //   payload: api.get(`/login`).then(() => {
  //     dispatch()
  //   })
  // }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFER:
      return extend(state, {
        currentOffer: action.payload
      });

    case ActionType.SET_CITY:
      if (state.currentCity.name === action.payload) {
        return state;
      }

      return extend(state, {
        currentCity: cities.get(action.payload)
      });

    case ActionType.BACK_TO_MAIN:
      if (state.currentOffer === UNSELECTED_OFFER) {
        return state;
      }

      return extend(state, {
        currentOffer: action.payload
      });

    case ActionType.CHANGE_SORTING:
      if (state.sortType === action.payload) {
        return state;
      }

      return extend(state, {
        sortType: action.payload
      });

    case ActionType.SET_HOVER_OFFER:
      return extend(state, {
        hoveredOffer: action.payload
      });

    case ActionType.UNSET_HOVER_OFFER:
      return extend(state, {
        hoveredOffer: undefined
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      })
  }

  return state;
};

export {ActionCreator, reducer, UNSELECTED_OFFER};
