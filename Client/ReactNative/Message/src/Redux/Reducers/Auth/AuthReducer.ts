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
import {AuthState} from './AuthReducerTypes';
import {AuthActions} from '../../Actions/AuthAction/AuthActionTypes';

export const initialState: AuthState = {
  verify: {
    isVerifying: false,
    isAuthenticated: false,
  },
  logIn: {
    isLoggingIn: false,
    logInError: false,
    error: {},
  },
  logOut: {
    isLoggingOut: false,
    logOutError: false,
    error: {},
  },
  signUp: {
    isSigningUp: false,
    signUpError: false,
    error: {},
  },
  user: {
    firebaseData: {},
    firestoreData: {},
  },
};

const FirebaseAuthReducer = (
  state = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
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
    case LOGIN_REQUEST:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: true,
          logInError: false,
          error: {},
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
          firebaseData: action.payload.firebaseData,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: false,
          logInError: true,
          error: action.payload,
        },
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logOut: {
          isLoggingOut: true,
          logOutError: false,
          error: {},
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
          firebaseData: {},
          firestoreData: {},
        },
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logOut: {
          ...state.logOut,
          isLoggingOut: false,
          logOutError: true,
          error: action.payload,
        },
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: true,
          signUpError: false,
          error: {},
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
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
export default FirebaseAuthReducer;
