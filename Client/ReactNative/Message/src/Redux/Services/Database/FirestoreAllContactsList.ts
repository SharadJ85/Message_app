import {
  requestAllContactsList,
  receiveAllContactsList,
  allContactsListError,
} from '../../Actions/Database/AllContactsListAction';
import firestore from '@react-native-firebase/firestore';
import {AllContactsListActions} from '../../Actions/Database/DatabaseActionTypes';
import {AllContactsList} from '../../Reducers/Database/DatabaseReducerTypes';

export const firestoreAllContactsList = (userUID: string) => (
  dispatch: (arg0: AllContactsListActions) => void,
) => {
  dispatch(requestAllContactsList());
  return (
    firestore()
      .collection('users')
      .doc('f6Aa2YDescDwvUGWfi3N')
      .collection('contacts')
      // ToDo change string to auth uid
      .onSnapshot((doc) => {
        if (doc) {
          const list: AllContactsList = [];
          if (doc.docs) {
            doc.docs.forEach((each: any) => {
              list.push(each._data);
            });
          }
          dispatch(receiveAllContactsList(list));
        } else {
          dispatch(allContactsListError('error'));
        }
      })
  );
};
