export interface Verify {
  isVerifying: boolean;
  isAuthenticated: boolean;
}

export interface LogIn {
  isLoggingIn: boolean;
  logInError: boolean;
  errors: {code: string; msg: string} | object;
}

export interface ResetPassword {
  isResettingPassword: boolean;
  resetPasswordError: boolean;
  resetPasswordSuccess: boolean;
  errors: object;
}

export interface LogOut {
  isLoggingOut: boolean;
  logOutError: boolean;
  errors: object;
}

export interface SignUp {
  isSigningUp: boolean;
  signUpError: boolean;
  errors: object;
}

export interface RequestUserData {
  isRequestUserData: boolean;
  requestUserDataError: boolean;
  errors: object;
}

export interface User {
  baseData: object;
  storeData: object;
}

export interface AuthState {
  verify: Verify;
  logIn: LogIn;
  resetPassword: ResetPassword;
  logOut: LogOut;
  signUp: SignUp;
  requestUserData: RequestUserData;
  user: User;
}
