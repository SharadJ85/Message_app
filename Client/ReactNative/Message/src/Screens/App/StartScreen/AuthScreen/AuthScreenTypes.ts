import {ConnectedProps} from 'react-redux';
import {connector} from './AuthScreen';
import {SignUp} from '../../../../Redux/Reducers/Auth/AuthReducerTypes';

export interface Signup {
  email: string;
  password: string;
  repeatPassword: string;
}
export interface Login {
  email: string;
  password: string;
}

export interface MapStateToPropsReturnType {
  signUp: SignUp;
}

export type ReactProps = {};
export type ReduxProps = ConnectedProps<typeof connector>;

export type AuthScreenProps = ReactProps & ReduxProps;
