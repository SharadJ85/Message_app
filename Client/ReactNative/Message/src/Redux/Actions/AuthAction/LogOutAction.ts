import {RequestLogOut, ReceiveLogOut, LogOutError} from './AuthActionTypes';
import {NativeFirebaseErrorType} from '../../Reducers/Auth/AuthReducerTypes';

//actions types
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//main actions
export const requestLogOut = (): RequestLogOut => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const receiveLogOut = (): ReceiveLogOut => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logOutError = (error: NativeFirebaseErrorType): LogOutError => {
  return {
    type: LOGOUT_FAILURE,
    payload: error,
  };
};
