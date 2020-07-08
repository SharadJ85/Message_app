import {ConnectedProps} from 'react-redux';
import {connector} from './AuthScreen';
import {
  LogIn,
  NativeFirebaseErrorType,
  SignUp,
} from '../../../../Redux/Reducers/Auth/AuthReducerTypes';

export interface SignupStateType {
  email: string;
  password: string;
  repeatPassword: string;
}
export interface LoginStateType {
  email: string;
  password: string;
}

export interface MapStateToPropsReturnType {
  signUpError: NativeFirebaseErrorType | {};
  logInError: NativeFirebaseErrorType | {};
}

export type ReactProps = {};
export type ReduxProps = ConnectedProps<typeof connector>;

export type AuthScreenProps = ReactProps & ReduxProps;
