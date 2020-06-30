//actions types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

//main actions
export const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};
export const receiveSignUp = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const signUpError = (error: any) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
