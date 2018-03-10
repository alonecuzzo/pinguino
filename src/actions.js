import { service } from './service';

//Action Types
export const actionType = {
  SIGNUP_USER_REQUEST: 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_FAILURE: 'SIGNUP_USER_FAILURE',
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE'
}

//Action Creators
export const actions = {
  signUp,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  getUsers,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure
};

function signUp(user) {
  return dispatch => {
    dispatch(actions.signUpRequest({ user }));
    service.signUp(user)
      .then(
        user => {
          dispatch(actions.signUpSuccess());
        },
        error => {
          dispatch(actions.signUpFailure());
        }
      );
  }
} 

function signUpRequest(user) {
    console.log('action request');
  return { 
    type: actionType.SIGNUP_USER_REQUEST,
    payload: {
      username: user.name
    }
  };
}

function signUpSuccess(userId, response) {
    console.log('action success');
  return { 
    type: actionType.SIGNUP_USER_SUCCESS,
    payload: {
      userId: userId,
      response: response
    }
  };
}

function signUpFailure() {
    console.log('action fail');
  return { 
    type: actionType.SIGNUP_USER_FAILURE,
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
