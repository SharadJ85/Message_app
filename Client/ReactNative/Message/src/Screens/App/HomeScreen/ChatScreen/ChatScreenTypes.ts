import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import User = FirebaseAuthTypes.User;

export interface MapStateToPropsReturnType {
  firebase: User;
}

export interface FromServerTypes {
  userFirebaseID: string;
  recipientFirebaseID: string;
  timeStamp: string;
  message: string;
}
