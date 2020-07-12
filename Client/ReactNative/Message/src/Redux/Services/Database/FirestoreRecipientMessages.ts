import {
  requestRecipientMessages,
  receiveRecipientMessages,
  recipientMessagesError,
} from '../../Actions/Database/RecipientMessagesAction';
import firestore from '@react-native-firebase/firestore';
import {RecipientMessagesActions} from '../../Actions/Database/DatabaseActionTypes';

export const firestoreRecipientMessages = (
  userID: string,
  recipientID: string,
) => (dispatch: (arg0: RecipientMessagesActions) => void) => {
  dispatch(requestRecipientMessages());
  return (
    firestore()
      .collection('users')
      .doc('f6Aa2YDescDwvUGWfi3N')
      .collection('contacts')
      .doc('51251wKCcvemUnzqyT7U')
      // ToDo string to change to userID
      .onSnapshot((doc) => {
        if (doc && doc.data()) {
          // ToDo remove log
          // console.log('snapshot log==', doc.data()?.all_contacts_list);
          dispatch(receiveRecipientMessages(doc.data()));
        } else {
          dispatch(recipientMessagesError('error'));
        }
      })
  );
};
