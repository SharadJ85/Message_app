import {VerifyRequest, VerifySuccess} from './AuthActionTypes';

//actions Strings
export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

//main actions
export const verifyRequest = (): VerifyRequest => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const verifySuccess = (): VerifySuccess => {
  return {
    type: VERIFY_SUCCESS,
  };
};
