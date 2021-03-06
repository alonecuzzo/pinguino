import Service from './Service';

//Action Types
export const actionType = {
  USER_CREATED: 'USER_CREATED',
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  GET_USER_MAP: 'GET_USER_MAP',
  GET_USER_MAP_REQUEST: 'GET_USER_MAP_REQUEST',
  GET_USER_MAP_SUCCESS: 'GET_USER_MAP_SUCCESS',
  GET_USER_MAP_FAILURE: 'GET_USER_MAP_FAILURE'
}

//Action Creators
export const actions = {
  createUser,
  getUsers,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  getUserMap,
  getUserMapRequest,
  getUserMapSuccess,
  getUserMapFailure
};

const service = new Service();

function createUser(user) {
  console.log('action user creation');
  const newUser = service.createUser(user)
  return { 
    type: actionType.USER_CREATED,
    user: newUser
  };
} 

function getUsers() {
  return dispatch => {
    dispatch(actions.getUsersRequest());
    service.getUserCollection()
      .then(
        users => {
          dispatch(actions.getUsersSuccess(users));
        },
        error => {
          dispatch(actions.getUsersFailure());
        }
      );
  }
}

function getUsersRequest() {
  console.log('action get users request');
  return {
    type: actionType.GET_USERS_REQUEST
  };
}

function getUsersSuccess(users) {
  console.log('action get users success');
  return {
    type: actionType.GET_USERS_SUCCESS,
    users: users
  };
}

function getUsersFailure() {
  console.log('action get users failure');
  return {
    type: actionType.GET_USERS_FAILURE
  };
}

function getUserMap(props) {
  const selectedUser = props.location.state.user;
  return dispatch => {
    dispatch(actions.getUserMapRequest(selectedUser));
   service.getMapData(selectedUser.zipcode)
      .then(
        response => {
          dispatch(actions.getUserMapSuccess(response));
        },
        error => {
          dispatch(actions.getUserMapFailure());
        }
      );
  }
}

function getUserMapRequest(user) {
  return {
    type: actionType.GET_USER_MAP_REQUEST,
    user: user
  };
}

function getUserMapSuccess(data) {
  return {
    type: actionType.GET_USER_MAP_SUCCESS,
    data: data
  };
}

function getUserMapFailure(props) {
  return {
    type: actionType.GET_USER_MAP_FAILURE
  };
}
