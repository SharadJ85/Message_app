import {
  requestLogin,
  receiveLogin,
  loginError,
} from '../../Actions/AuthAction/LogInAction';
import auth from '@react-native-firebase/auth';
import {LogInActions} from '../../Actions/AuthAction/AuthActionTypes';

export const firebaseLogIn = (email: string, password: string) => (
  dispatch: (arg0: LogInActions) => void,
) => {
  console.warn('Logging Initialised');
  dispatch(requestLogin());
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.warn('Logging in');
      dispatch(receiveLogin(user.user));
    })
    .catch((error) => {
      console.warn('Logging error', error);
      dispatch(loginError(error));
    });
};
