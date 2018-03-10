import { actionType } from './actions';

const initialState = {
  registering: false,
  users: []
};

export function signup(state=initialState, action) {
  switch (action.type) {
    case actionType.SIGNUP_USER_REQUEST:
      return { registering: true };
    case actionType.SIGNUP_USER_SUCCESS:
      return { registering: false };
    case actionType.SIGNUP_USER_FAILURE:
      return { registering: false };
    case actionType.GET_USERS_REQUEST:
      return { users: []};
    case actionType.GET_USERS_SUCCESS:
      return { users: action.users };
    case actionType.GET_USERS_FAILURE:
      return { users: [] };
    default:
      return state;
  }
}
