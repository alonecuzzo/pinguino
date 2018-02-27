//Action Types
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

//Action Creators
export function signupUser(userId) {
  return { type: SIGNUP_USER, userId };
}
