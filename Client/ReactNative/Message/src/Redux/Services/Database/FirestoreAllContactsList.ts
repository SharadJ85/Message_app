import {
  requestAllContactsList,
  receiveAllContactsList,
  allContactsListError,
} from '../../Actions/Database/AllContactsListAction';
import firestore from '@react-native-firebase/firestore';
import {AllContactsListActions} from '../../Actions/Database/DatabaseActionTypes';

export const firestoreAllContactsList = (userUID: string) => (
  dispatch: (arg0: AllContactsListActions) => void,
) => {
  dispatch(requestAllContactsList());
  return (
    firestore()
      .collection('users')
      .doc('f6Aa2YDescDwvUGWfi3N')
      // ToDo change string to auth uid
      .onSnapshot((doc) => {
        if (doc && doc.data()) {
          dispatch(receiveAllContactsList(doc.data()?.all_contacts_list));
        } else {
          dispatch(allContactsListError('error'));
        }
      })
  );
};
