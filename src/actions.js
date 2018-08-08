import { service } from './service';

//Action Types
export const actionType = {
  USER_CREATION_REQUEST: 'USER_CREATION_REQUEST',
  USER_CREATION_SUCCESS: 'USER_CREATION_SUCCESS',
  USER_CREATION_FAILURE: 'USER_CREATION_FAILURE',
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  GET_USER_MAP: 'GET_USER_MAP'
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
  getUserMap
};

function userCreation(user) {
  return dispatch => {
    dispatch(actions.userCreationRequest({ user }));
    service.userCreation(user)
      .then(
        user => {
          dispatch(actions.userCreationSuccess());
        },
        error => {
          dispatch(actions.userCreationFailure());
        }
      );
  }
} 

function userCreationRequest(user) {
    console.log('action request');
  return { 
    type: actionType.USER_CREATION_REQUEST,
    payload: {
      username: user.name
    }
  };
}

function userCreationSuccess(userId, response) {
    console.log('action success');
  return { 
    type: actionType.USER_CREATION_SUCCESS,
    payload: {
      userId: userId,
      response: response
    }
  };
}

function userCreationFailure() {
    console.log('action fail');
  return { 
    type: actionType.USER_CREATION_FAILURE,
    payload: new Error(),
    error: true
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
  console.log('get users request');
  return {
    type: actionType.GET_USERS_REQUEST,
    payload: {
      response: 'something'
    }
  };
}

function getUsersSuccess(users) {
  console.log(users);
  console.log('get users success');
  return {
    type: actionType.GET_USERS_SUCCESS,
    users: users
  };
}

function getUsersFailure() {
  console.log('get users failure');
  return {
    type: actionType.GET_USERS_FAILURE,
    payload: {
      error: new Error()
    }
  };
}

function getUserMap(props) {
  console.log('get user map');
  return {
    type: actionType.GET_USER_MAP,
    user: props.location.state.user
  };
}
