import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './LogInAction';
import {LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from './LogOutAction';
import {SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from './SignUpAction';
import {VERIFY_REQUEST, VERIFY_SUCCESS} from './VerifyAction';
import {NativeFirebaseErrorType} from '../../Reducers/Auth/AuthReducerTypes';
import {FirebaseAuthUserType} from '../../Reducers/Auth/AuthReducerTypes';

// LogIn Actions
export interface RequestLogIn {
  type: typeof LOGIN_REQUEST;
}

export interface ReceiveLogIn {
  type: typeof LOGIN_SUCCESS;
  payload: FirebaseAuthUserType;
}

export interface LogInError {
  type: typeof LOGIN_FAILURE;
  payload: NativeFirebaseErrorType | {};
}

export type LogInActions = RequestLogIn | ReceiveLogIn | LogInError;

// LogOut Actions
export interface RequestLogOut {
  type: typeof LOGOUT_REQUEST;
}

export interface ReceiveLogOut {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogOutError {
  type: typeof LOGOUT_FAILURE;
  payload: NativeFirebaseErrorType | {};
}

export type LogOutActions = RequestLogOut | ReceiveLogOut | LogOutError;

// SignUp Actions
export interface RequestSignUp {
  type: typeof SIGNUP_REQUEST;
}

export interface ReceiveSignUp {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignUpError {
  type: typeof SIGNUP_FAILURE;
  payload: NativeFirebaseErrorType | {};
}

export type SignUpActions = RequestSignUp | ReceiveSignUp | SignUpError;

// Verify Actions
export interface VerifyRequest {
  type: typeof VERIFY_REQUEST;
}

export interface VerifySuccess {
  type: typeof VERIFY_SUCCESS;
}

export type VerifyActions = VerifyRequest | VerifySuccess;

// All Action types
export type AuthActions =
  | LogInActions
  | LogOutActions
  | SignUpActions
  | VerifyActions;
