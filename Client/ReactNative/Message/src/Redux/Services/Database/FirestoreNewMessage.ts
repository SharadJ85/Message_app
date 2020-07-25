import firestore from '@react-native-firebase/firestore';
import {NewMessageActions} from '../../Actions/Database/DatabaseActionTypes';
import {
  newMessageError,
  receiveNewMessage,
  requestNewMessage,
} from '../../Actions/Database/NewMessageAction';

export const firestoreNewMessage = (
  userID: string,
  recipientID: string,
  message: string,
  timestamp: number | string,
  type: 'sent' | 'received',
) => (dispatch: (arg0: NewMessageActions) => void) => {
  dispatch(requestNewMessage());
  return firestore()
    .collection('users')
    .doc('f6Aa2YDescDwvUGWfi3N')
    .collection('contacts')
    .doc(recipientID)
    .update({
      messages: firestore.FieldValue.arrayUnion({
        message: message,
        timestamp: timestamp,
        type: type,
      }),
    })
    .then(() => dispatch(receiveNewMessage()))
    .catch((e) => {
      console.log('new message error==', e);
      dispatch(newMessageError(e));
    });
};
