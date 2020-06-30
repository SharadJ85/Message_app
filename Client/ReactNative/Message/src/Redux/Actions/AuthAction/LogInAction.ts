import {RequestLogin, ReceiveLogin, LoginError} from './AuthActionTypes';

//actions Strings
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//main actions
export const requestLogin = (): RequestLogin => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const receiveLogin = (baseData: any): ReceiveLogin => {
  return {
    type: LOGIN_SUCCESS,
    payload: baseData,
  };
};

export const loginError = (error: any): LoginError => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
