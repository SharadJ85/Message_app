import {RequestLogIn, ReceiveLogIn, LogInError} from './AuthActionTypes';
import {
  NativeFirebaseErrorType,
  FirebaseAuthUserType,
} from '../../Reducers/Auth/AuthReducerTypes';

//actions Strings
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//main actions
export const requestLogin = (): RequestLogIn => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const receiveLogin = (user: FirebaseAuthUserType): ReceiveLogIn => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginError = (error: NativeFirebaseErrorType | {}): LogInError => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
