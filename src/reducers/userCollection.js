import { actionType } from '../actions';

const initialState = {
  users: [],
  retrieving: false,
  retrieved: false,
  error: false
}

export default function userCollection(state = initialState, action){
  switch (action.type) {
    case actionType.GET_USERS_REQUEST:
      return Object.assign({}, state.userCollection, {
        retrieving: true
    });
    case actionType.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        retrieving: false,
        retrieved: true,
        users: action.users
      });
    case actionType.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        retrieving: false,
        error: true
      });
    default:
      return state;
  }
}
