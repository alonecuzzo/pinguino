import { actionType } from '../actions';

const initialState = {
  creating: false,
  created: false,
  error: false,
  userData: {}
}

export default function newUser(state = initialState, action){
  switch (action.type) {
    case actionType.USER_CREATION_REQUEST:
      return Object.assign({}, state, {
        creating: true,
        userData: action.user
      });
    case actionType.USER_CREATION_SUCCESS:
      return Object.assign({}, state, {
        creating: false,
        created: true,
        userId: action.userId
      });
    case actionType.USER_CREATION_FAILURE:
      return Object.assign({}, newUser, {
        creating: false,
        error: true
      });
    default:
    return state;
  }
}
