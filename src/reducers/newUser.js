import { actionType } from '../actions';

const initialState = {
  creating: false,
  created: false,
  error: false,
  userData: {}
}

export default function newUser(state = initialState, action){
  switch (action.type) {
    case actionType.USER_CREATED:
      return Object.assign({}, state, {
        creating: false,
        created: true,
        userData: action.user
      });
    default:
    return state;
  }
}
