import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './data';
import offersAmsterdam from '../../test-mock/offers-amsterdam';
import offer from '../../test-mock/offer';

describe(`Data reducer test suite`, () => {
  it(`Reducer without additional parameters`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(),
    });
  });

  it(`Data reducer: load offers`, () => {
    expect(reducer({
      offers: [],
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(),
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersAmsterdam
    })).toEqual({
      offers: offersAmsterdam,
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(),
    });
  });

  it(`Data reducer: load nearby offers`, () => {
    expect(reducer({
      offers: [],
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(),
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offersAmsterdam.slice(0, 3)
    })).toEqual({
      offers: [],
      nearbyOffers: offersAmsterdam.slice(0, 3),
      reviews: [],
      favorites: new Set(),
    });
  });

  it(`Data reducer: load favorites `, () => {
    expect(reducer({
      offers: [],
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(),
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: offersAmsterdam
    })).toEqual({
      offers: [],
      nearbyOffers: [],
      reviews: [],
      favorites: new Set(offersAmsterdam),
    });
  });
});

describe(`Data operations test suite`, () => {
  const api = createAPI(() => {});

  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/hotels`)
      .reply(200, []);
      // .reply(200, [{fake: true}]);

    return Operation.loadOffers()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          // payload: [{fake: true}]
          payload: []
        });
      });
  });
});
