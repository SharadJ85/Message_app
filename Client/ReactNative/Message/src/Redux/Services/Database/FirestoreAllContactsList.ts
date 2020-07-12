import {
  requestAllContactsList,
  receiveAllContactsList,
  allContactsListError,
} from '../../Actions/Database/AllContactsListAction';
import firestore from '@react-native-firebase/firestore';
import {AllContactsListActions} from '../../Actions/Database/DatabaseActionTypes';

export const firestoreAllContactsList = (uid: string) => (
  dispatch: (arg0: AllContactsListActions) => void,
) => {
  dispatch(requestAllContactsList());
  return (
    firestore()
      .collection('users')
      .doc('f6Aa2YDescDwvUGWfi3N')
      // ToDo string to change to auth uid
      .onSnapshot((doc) => {
        if (doc && doc.data()) {
          dispatch(receiveAllContactsList(doc.data()?.all_contacts_list));
        } else {
          dispatch(allContactsListError('error'));
        }
      })
  );
};
