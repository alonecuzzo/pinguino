import { actionType } from './actions';

const initialState = {
  registering: false
};

export function signup(state=initialState, action) {
  switch (action.type) {
    case actionType.SIGNUP_USER_REQUEST:
      return { registering: true };
    case actionType.SIGNUP_USER_SUCCESS:
      return { registering: false };
    case actionType.SIGNUP_USER_FAILURE:
      return { registering: false };
    default:
      return state;
  }
}
