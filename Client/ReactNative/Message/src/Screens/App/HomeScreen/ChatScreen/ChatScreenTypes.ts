import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import User = FirebaseAuthTypes.User;
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Recipient} from '../../../../Redux/Reducers/Database/DatabaseReducerTypes';

export interface MapStateToPropsReturnType {
  ReduxStateFirebase: User;
  ReduxStateRecipient: null | Recipient;
}

export interface MapDispatchToPropsReturnType {
  DispatchFetchRecipient: (userUid: string, recipientUid: string) => void;
  DispatchNewMessage: (
    userUid: string,
    recipientUid: string,
    message: string,
    timestamp: number | string,
    type: 'sent' | 'received',
  ) => void;
}

export interface FromServerTypes {
  userFirebaseID: string;
  recipientFirebaseID: string;
  timeStamp: string;
  message: string;
}

export interface ReactProps {}

export type ChatScreenPropsTypes = HomeScreenStackNavProps<'Chat'> &
  MapStateToPropsReturnType &
  MapDispatchToPropsReturnType &
  ReactProps;
