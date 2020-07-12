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
  console.warn('LogOut Initialised');
  dispatch(requestLogOut());
  auth()
    .signOut()
    .then(() => {
      console.warn('Logged Out Successfully');
      dispatch(receiveLogOut());
    })
    .catch((error) => {
      console.warn('LogOut Error', error);
      dispatch(logOutError(error));
    });
};
