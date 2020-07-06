import {RequestSignUp, ReceiveSignUp, SignUpError} from './AuthActionTypes';
import {NativeFirebaseErrorType} from '../../Reducers/Auth/AuthReducerTypes';

//actions types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

//main actions
export const requestSignUp = (): RequestSignUp => {
  return {
    type: SIGNUP_REQUEST,
  };
};
export const receiveSignUp = (): ReceiveSignUp => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const signUpError = (error: NativeFirebaseErrorType): SignUpError => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
