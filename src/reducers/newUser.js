import { actionType } from '../actions';

const initialState = {
  newUser: {}
}

export default function newUser(state = initialState, action){
  switch (action.type) {
    case actionType.USER_CREATED:
      return Object.assign({}, state, {
        newUser: action.user
      });
    default:
    return state;
  }
}
