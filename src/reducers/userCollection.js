import { actionType } from '../actions';

const initialState = {
  users: [],
  retrieving: false,
  retrieved: false,
  error: false
}

//just a small comment - it might not apply... I was reading on redux since I'm not too
//familiar with it in a practical sense and I was on the docs - just bringing this up because
//the interviewer may ask why you're passing around User objects, because if they get real big
//there might be a memory or speed issue...
//"It's a good idea to pass as little data in each action as possible. For example, it's better to pass index than the whole todo object."
// https://redux.js.org/basics/actions
//Again, I doubt it applies here, or that you should be passing around id's since the user object is so small

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
