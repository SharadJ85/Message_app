import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../Actions/AuthAction/LogInAction';
import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../../Actions/AuthAction/VerifyAction';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../../Actions/AuthAction/SignUpAction';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../../Actions/AuthAction/LogOutAction';

const initialState = {
  verify: {
    isVerifying: false,
    isAuthenticated: false,
  },
  logIn: {
    isLoggingIn: false,
    logInError: false,
    errors: {},
  },
  resetPassword: {
    isResettingPassword: false,
    resetPasswordError: false,
    resetPasswordSuccess: false,
    errors: {},
  },
  logOut: {
    isLoggingOut: false,
    logOutError: false,
    errors: {},
  },
  signUp: {
    isSigningUp: false,
    signUpError: false,
    errors: {},
  },
  requestUserData: {
    isRequestUserData: false,
    requestUserDataError: false,
    errors: {},
  },
  user: {
    baseData: {},
    storeData: {},
  },
};

const FirebaseAuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: true,
          logInError: false,
          errors: {},
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isAuthenticated: true,
        },
        logIn: {
          ...state.logIn,
          isLoggingIn: false,
        },
        user: {
          ...state.user,
          baseData: action.baseData,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: false,
          logInError: true,
          errors: action.error,
        },
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logOut: {
          isLoggingOut: true,
          logoutError: false,
          errors: {},
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isAuthenticated: false,
        },
        logOut: {
          ...state.logOut,
          isLoggingOut: false,
        },
        user: {
          baseData: {},
          storeData: {},
        },
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logOut: {
          ...state.logOut,
          isLoggingOut: false,
          logoutError: true,
          errors: action.error,
        },
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        verify: {
          ...state.verify,
          isVerifying: true,
        },
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isVerifying: false,
        },
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: true,
          signUpError: false,
          errors: {},
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: false,
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: false,
          signUpError: true,
          errors: action.error,
        },
      };
    default:
      return state;
  }
};
export default FirebaseAuthReducer;
