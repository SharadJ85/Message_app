import {
  ALLCONTACTSLIST_REQUEST,
  ALLCONTACTSLIST_SUCCESS,
  ALLCONTACTSLIST_FAILURE,
} from './AllContactsListAction';
import {
  NEWUSER_REQUEST,
  NEWUSER_SUCCESS,
  NEWUSER_FAILURE,
} from './NewUserAction';
import {AllContactsList} from '../../Reducers/Database/DatabaseReducerTypes';
import {
  NEWMESSAGE_FAILURE,
  NEWMESSAGE_REQUEST,
  NEWMESSAGE_SUCCESS,
} from './NewMessageAction';

// AllContactsList Actions
export interface RequestAllContactsListType {
  type: typeof ALLCONTACTSLIST_REQUEST;
}

export interface ReceiveAllContactsListType {
  type: typeof ALLCONTACTSLIST_SUCCESS;
  payload: AllContactsList;
}

export interface AllContactsListErrorType {
  type: typeof ALLCONTACTSLIST_FAILURE;
  payload: any;
}

export type AllContactsListActions =
  | RequestAllContactsListType
  | ReceiveAllContactsListType
  | AllContactsListErrorType;

// AllContactsList Actions
export interface RequestNewUserType {
  type: typeof NEWUSER_REQUEST;
}

export interface ReceiveNewUserType {
  type: typeof NEWUSER_SUCCESS;
}

export interface NewUserErrorType {
  type: typeof NEWUSER_FAILURE;
  payload: any;
}

export type NewUserActions =
  | RequestNewUserType
  | ReceiveNewUserType
  | NewUserErrorType;

// New Message Actions
export interface RequestNewMessageType {
  type: typeof NEWMESSAGE_REQUEST;
}

export interface ReceiveNewMessageType {
  type: typeof NEWMESSAGE_SUCCESS;
}

export interface NewMessageErrorType {
  type: typeof NEWMESSAGE_FAILURE;
  payload: any;
}

export type NewMessageActions =
  | RequestNewMessageType
  | ReceiveNewMessageType
  | NewMessageErrorType;

// All Action types
export type DatabaseActions =
  | AllContactsListActions
  | NewUserActions
  | NewMessageActions;
