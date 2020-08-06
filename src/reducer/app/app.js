import {extend} from '../../utils';
import {UNSELECTED_OFFER, cities, SortTypes} from '../../const';

const initialState = {
  citiesList: Array.from(cities.keys()),
  currentCity: cities.get(`Amsterdam`), // should be removed, or updated
  currentOffer: UNSELECTED_OFFER, // should be removed, or updated
  hoveredOffer: UNSELECTED_OFFER,
  sortType: SortTypes.DEFAULT,
};

const ActionType = {
  SET_OFFER: `SET_OFFER`,
  SET_CITY: `SET_CITY`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SET_HOVER_OFFER: `SET_HOVER_OFFER`,
  UNSET_HOVER_OFFER: `UNSET_HOVER_OFFER`,
  BACK_TO_MAIN: `BACK_TO_MAIN`,
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
  changeSorting: (sortType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortType
  }),
  setHoveredOffer: (offer) => ({
    type: ActionType.SET_HOVER_OFFER,
    payload: offer
  }),
  unsetHoveredOffer: (offer) => ({
    type: ActionType.UNSET_HOVER_OFFER,
    payload: offer
  }),
  backToMain: () => ({
    type: ActionType.BACK_TO_MAIN,
    payload: UNSELECTED_OFFER
  })
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
      if (state.hoveredOffer !== action.payload) {
        return state;
      }

      return extend(state, {
        hoveredOffer: action.payload
      });

    case ActionType.BACK_TO_MAIN:
      if (state.currentOffer === UNSELECTED_OFFER) {
        return state;
      }

      return extend(state, {
        currentOffer: action.payload
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType};
