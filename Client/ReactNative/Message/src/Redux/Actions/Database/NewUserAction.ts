import {
  RequestNewUserType,
  ReceiveNewUserType,
  NewUserErrorType,
} from './DatabaseActionTypes';

//actions Strings
export const NEWUSER_REQUEST = 'NEWUSER_REQUEST';
export const NEWUSER_SUCCESS = 'NEWUSER_SUCCESS';
export const NEWUSER_FAILURE = 'NEWUSER_FAILURE';

//main actions
export const requestNewUser = (): RequestNewUserType => {
  return {
    type: NEWUSER_REQUEST,
  };
};

export const receiveNewUser = (): ReceiveNewUserType => {
  return {
    type: NEWUSER_SUCCESS,
  };
};

export const newUserError = (error: any): NewUserErrorType => {
  return {
    type: NEWUSER_FAILURE,
    payload: error,
  };
};
