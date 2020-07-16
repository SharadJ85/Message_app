import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import User = FirebaseAuthTypes.User;
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {Recipient} from '../../../../Redux/Reducers/Database/DatabaseReducerTypes';

export interface MapStateToPropsReturnType {
  ReduxReducerFirebase: User;
  ReduxReducerRecipient: null | Recipient;
}

export interface MapDispatchToPropsReturnType {
  ReduxDispatchFetchRecipient: (userUid: string, recipientUid: string) => void;
  ReduxDispatchNewMessage: (
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
