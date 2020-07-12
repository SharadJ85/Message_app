import {
  verifyRequest,
  verifySuccess,
} from '../../Actions/AuthAction/VerifyAction';
import {receiveLogin} from '../../Actions/AuthAction/LogInAction';
import auth from '@react-native-firebase/auth';
import {
  ReceiveLogIn,
  VerifyActions,
} from '../../Actions/AuthAction/AuthActionTypes';

export const firebaseVerify = () => (
  dispatch: (arg0: VerifyActions | ReceiveLogIn) => void,
) => {
  dispatch(verifyRequest());
  auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
