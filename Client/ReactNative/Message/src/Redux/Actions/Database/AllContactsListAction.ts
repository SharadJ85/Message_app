import {
  RequestAllContactsListType,
  ReceiveAllContactsListType,
  AllContactsListErrorType,
} from './DatabaseActionTypes';
import {AllContactsList} from '../../Reducers/Database/DatabaseReducerTypes';

//actions Strings
export const ALLCONTACTSLIST_REQUEST = 'ALLCONTACTSLIST_REQUEST';
export const ALLCONTACTSLIST_SUCCESS = 'ALLCONTACTSLIST_SUCCESS';
export const ALLCONTACTSLIST_FAILURE = 'ALLCONTACTSLIST_FAILURE';

//main actions
export const requestAllContactsList = (): RequestAllContactsListType => {
  return {
    type: ALLCONTACTSLIST_REQUEST,
  };
};

export const receiveAllContactsList = (
  list: AllContactsList,
): ReceiveAllContactsListType => {
  return {
    type: ALLCONTACTSLIST_SUCCESS,
    payload: list,
  };
};

export const allContactsListError = (error: any): AllContactsListErrorType => {
  return {
    type: ALLCONTACTSLIST_FAILURE,
    payload: error,
  };
};
