import {reducer, ActionCreator, ActionType} from './app';
import {UNSELECTED_OFFER, cities, SortTypes} from '../../const';
import offer from '../../test-mock/offer';

describe(`App reducer test suite`, () => {
  it(`Reducer withot addition parameters should return intial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      citiesList: Array.from(cities.keys()),
      currentCity: cities.get(`Amsterdam`),
      currentOffer: UNSELECTED_OFFER,
      hoveredOffer: UNSELECTED_OFFER,
      sortType: SortTypes.DEFAULT,
    });
  });

  it(`Reducer should cheange sort type`, () => {
    expect(reducer({
      citiesList: Array.from(cities.keys()),
      currentCity: cities.get(`Amsterdam`),
      currentOffer: UNSELECTED_OFFER,
      hoveredOffer: UNSELECTED_OFFER,
      sortType: SortTypes.TO_LOW,
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: SortTypes.TOP
    })).toEqual({
      citiesList: Array.from(cities.keys()),
      currentCity: cities.get(`Amsterdam`),
      currentOffer: UNSELECTED_OFFER,
      hoveredOffer: UNSELECTED_OFFER,
      sortType: SortTypes.TOP,
    });
  });
});
