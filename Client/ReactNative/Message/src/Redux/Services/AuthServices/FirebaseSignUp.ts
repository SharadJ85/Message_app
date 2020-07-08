import {
  requestSignUp,
  receiveSignUp,
  signUpError,
} from '../../Actions/AuthAction/SignUpAction';
import auth from '@react-native-firebase/auth';
import {SignUpActions} from '../../Actions/AuthAction/AuthActionTypes';

export const firebaseSignUp = (email: string, password: string) => (
  dispatch: (arg0: SignUpActions) => void,
) => {
  dispatch(requestSignUp());
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(receiveSignUp());
    })
    .catch((error) => {
      dispatch(signUpError(error));
    });
};
