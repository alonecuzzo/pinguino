import { service } from './service';

//Action Types
export const actionType = {
  SIGNUP_USER_REQUEST: 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_FAILURE: 'SIGNUP_USER_FAILURE'
}

//Action Creators
export const actions = {
  signup,
  request,
  success,
  failure
};

function signup(username, email, zipcode) {
  return dispatch => {
    dispatch(request({ username }));
    service.signup(username)
      .then(
        user => {
          dispatch(success());
        },
        error => {
          dispatch(failure());
        }
      );
  }
} 

function request(userId) {
  return { 
    type: actionType.SIGNUP_USER_REQUEST,
    payload: {
      userId: userId
    }
  };
}

function success(userId, response) {
  return { 
    type: actionType.SIGNUP_USER_SUCCESS,
    payload: {
      userId: userId,
      response: response
    }
  };
}

function failure() {
  return { 
    type: actionType.SIGNUP_USER_FAILURE,
    payload: new Error(),
    error: true
  };
}
