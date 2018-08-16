import { actionType } from './actions';

const initialState = {
  creatingUser: false,
  loadingUsers: false,
  requestingMapData: false,
  users: [],
  selectedUser: {},
  geoJSON: {}
};

export function rootReducer(state=initialState, action) {
  switch (action.type) {
    case actionType.USER_CREATION_REQUEST:
      return Object.assign({}, state, {
        creatingUser: true 
      });
    case actionType.USER_CREATION_SUCCESS:
      return Object.assign({}, state, {
        creatingUser: false 
      });
    case actionType.USER_CREATION_FAILURE:
      return Object.assign({}, state, { 
        creatingUser: false 
      });
    case actionType.GET_USERS_REQUEST:
      return Object.assign({}, state, { 
        loadingUsers: true
      });
    case actionType.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        loadingUsers: false,
        users: action.users
      });
    case actionType.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        loadingUsers: false
      });
    case actionType.GET_USER_MAP_REQUEST:
      return Object.assign({}, state, { 
        requestingMapData: true,
        selectedUser: action.user
      });
    case actionType.GET_USER_MAP_SUCCESS:
      return Object.assign({}, state, { 
        requestingMapData: false, 
        geoJSON: action.data 
      });
    case actionType.GET_USER_MAP_FAILURE:
      return Object.assign({}, state, {
        requestingMapData: false 
      });
    default:
      return state;
  }
}
