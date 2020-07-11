import {ReactNativeFirebase} from '@react-native-firebase/app';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type NativeFirebaseErrorType = ReactNativeFirebase.NativeFirebaseError;
export type FirebaseAuthUserType = FirebaseAuthTypes.User;

export interface Verify {
  isVerifying: boolean;
  isAuthenticated: boolean;
}

export interface LogIn {
  isLoggingIn: boolean;
  logInError: boolean;
  error: NativeFirebaseErrorType | {};
}

export interface LogOut {
  isLoggingOut: boolean;
  logOutError: boolean;
  error: NativeFirebaseErrorType | {};
}

export interface SignUp {
  isSigningUp: boolean;
  signUpError: boolean;
  error: NativeFirebaseErrorType | {};
}

export interface User {
  newUser: boolean;
  firebaseData: FirebaseAuthUserType;
  firestoreData: object;
}

export interface AuthState {
  verify: Verify;
  logIn: LogIn;
  logOut: LogOut;
  signUp: SignUp;
  user: User;
}
