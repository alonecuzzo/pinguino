import { actionType } from '../actions';

const initialState = {
  retrievingMapData: false,
  mapDataRetreived: false,
  error: false,
  mapData: {},
  userData: {}
}

export default function selectedUser(state = initialState, action){
  switch (action.type) {
    case actionType.GET_USER_MAP_REQUEST:
      return Object.assign({}, state, {
        retrievingMapData: true,
        userData: action.user
    });
    case actionType.GET_USER_MAP_SUCCESS:
      return Object.assign({}, state, {
        retrievingMapData: false,
        mapDataRetrieved: true,
        mapData: action.data
      });
    case actionType.GET_USER_MAP_FAILURE:
      return Object.assign({}, state, {
        retrievingMapData: false,
        mapDataRetrieved: false,
        error: true
      });
    default:
      return state;
  }
}
