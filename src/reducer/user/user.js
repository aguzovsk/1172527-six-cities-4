import {extend} from '../../utils';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  accountName: undefined,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  // CHECK_AUTH: `CHECK_AUTH`,
  // AUTH_STATUS: `AUTH_STATUS`,
  // LOGIN: `LOGIN`,
  // LOGOUT: `LOGOUT`
};

const ActionCreator = {
  // changeAuthStatus: (status) => ({
  //   type: actionType.AUTH_STATUS,
  //   payload: status,
  // }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.AUTH_STATUS:
    //   return extend(state, {
    //     authorizationStatus: action.payload
    //   });

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(actionCreator.changeAuthStatus(AuthorizationStatus.AUTH))
      });
      // .catch((err) => {
      //   throw err;
      // });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, authData)
      .then(() => {
        dispatch(actionCreator.changeAuthStatus(AuthorizationStatus.AUTH));
      });
  },
};

export {reducer, Operation, ActionType, ActionCreator};
