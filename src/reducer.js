import { actionType } from './actions';

const initialState = {
  registering: false,
  users: []
};

export function rootReducer(state=initialState, action) {
  switch (action.type) {
    case actionType.USER_CREATION_REQUEST:
      return { registering: true };
    case actionType.USER_CREATION_SUCCESS:
      return { registering: false };
    case actionType.USER_CREATION_FAILURE:
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
