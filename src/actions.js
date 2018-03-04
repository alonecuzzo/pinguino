//Action Types
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

//Action Creators
export function signupUserRequest(userId) {
  return { 
    type: SIGNUP_USER_REQUEST,
    payload: {
      userId: userId
    }
  };
}

export function signupUserSuccess(userId, response) {
  return { 
    type: SIGNUP_USER_SUCCESS,
    payload: {
      userId: userId,
      response: response
    }
  };
}

export function signupUserFailure() {
  return { 
    type: SIGNUP_USER_FAILURE,
    payload: new Error(),
    error: true
  };
}
