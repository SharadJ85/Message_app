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
  console.warn('SignUp Initialised');
  dispatch(requestSignUp());
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.warn('Signed Up Successfully');
      dispatch(receiveSignUp());
    })
    .catch((error) => {
      console.warn('SignUp error', error);
      dispatch(signUpError(error));
    });
};
