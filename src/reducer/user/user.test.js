import {reducer, ActionCreator, ActionType} from './user';
import {AuthorizationStatus} from '../../const';

describe(`User reducer test suite`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      accountName: undefined
    });
  });

  it(`Reducer shoud change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      accountName: undefined
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      accountName: undefined
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      accountName: undefined
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      accountName: undefined
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });
});


describe(`User ActionCreators test suite`, () => {
  it(`ActionCreator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  })
});
