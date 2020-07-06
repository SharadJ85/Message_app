import {
  requestLogOut,
  receiveLogOut,
  logOutError,
} from '../../Actions/AuthAction/LogOutAction';
import auth from '@react-native-firebase/auth';
import {LogOutActions} from '../../Actions/AuthAction/AuthActionTypes';

export const firebaseLogOut = () => (
  dispatch: (arg0: LogOutActions) => void,
) => {
  dispatch(requestLogOut());
  auth()
    .signOut()
    .then(() => dispatch(receiveLogOut()))
    .catch((error) => dispatch(logOutError(error)));
};
