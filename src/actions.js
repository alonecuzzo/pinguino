import { service } from './service';

//Action Types
export const actionType = {
  USER_CREATION_REQUEST: 'USER_CREATION_REQUEST',
  USER_CREATION_SUCCESS: 'USER_CREATION_SUCCESS',
  USER_CREATION_FAILURE: 'USER_CREATION_FAILURE',
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
  userCreation,
  userCreationRequest,
  userCreationSuccess,
  userCreationFailure,
  getUsers,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  getUserMap,
  getUserMapRequest,
  getUserMapSuccess,
  getUserMapFailure
};

function userCreation(user) {
  return dispatch => {
    dispatch(actions.userCreationRequest({ user }));
    service.userCreation(user)
      .then(
        user => {
          dispatch(actions.userCreationSuccess(user.id));
        },
        error => {
          dispatch(actions.userCreationFailure());
        }
      );
  }
} 

function userCreationRequest(user) {
  return { 
    type: actionType.USER_CREATION_REQUEST,
    user: user
  };
}

function userCreationSuccess(userId) {
  return { 
    type: actionType.USER_CREATION_SUCCESS,
    userId: userId
  };
}

function userCreationFailure() {
  return { 
    type: actionType.USER_CREATION_FAILURE
  };
}

function getUsers() {
  return dispatch => {
    dispatch(actions.getUsersRequest());
    service.getUsers()
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
  return {
    type: actionType.GET_USERS_REQUEST
  };
}

function getUsersSuccess(users) {
  return {
    type: actionType.GET_USERS_SUCCESS,
    users: users
  };
}

function getUsersFailure() {
  return {
    type: actionType.GET_USERS_FAILURE
  };
}

function getUserMap(props) {
  const selectedUser = props.location.state.user;
  return dispatch => {
    dispatch(actions.getUserMapRequest(selectedUser));
    service.getUserMapData(selectedUser.zipcode)
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
