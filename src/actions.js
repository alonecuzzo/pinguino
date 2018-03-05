import { service } from './service';

//Action Types
export const actionType = {
  SIGNUP_USER_REQUEST: 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_FAILURE: 'SIGNUP_USER_FAILURE'
}

//Action Creators
export const actions = {
  signUp,
  signUpRequest,
  signUpSuccess,
  signUpFailure
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
