import { actionType } from './actions';

const initialState = {
  registering: false,
  users: [],
  selectedUser: {},
  geoJSON: {}
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
    case actionType.GET_USER_MAP:
      return { selectedUser: action.user };
    case actionType.GET_USER_MAP_REQUEST:
      return { requestingMap: true };
    case actionType.GET_USER_MAP_SUCCESS:
      return { requestingMap: false, geoJSON: action.data };
    case actionType.GET_USER_MAP_FAILURE:
      return { requestingMap: false };
    default:
      return state;
  }
}
