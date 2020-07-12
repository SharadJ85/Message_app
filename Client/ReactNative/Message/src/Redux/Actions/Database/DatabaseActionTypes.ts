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
import {
  RECIPIENTMESSAGES_REQUEST,
  RECIPIENTMESSAGES_SUCCESS,
  RECIPIENTMESSAGES_FAILURE,
} from './RecipientMessagesAction';
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

// Recipient Messages Actions
export interface RequestRecipientMessagesType {
  type: typeof RECIPIENTMESSAGES_REQUEST;
}

export interface ReceiveRecipientMessagesType {
  type: typeof RECIPIENTMESSAGES_SUCCESS;
  payload: any;
}

export interface RecipientMessagesErrorType {
  type: typeof RECIPIENTMESSAGES_FAILURE;
  payload: any;
}

export type RecipientMessagesActions =
  | RequestRecipientMessagesType
  | ReceiveRecipientMessagesType
  | RecipientMessagesErrorType;

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
  | RecipientMessagesActions
  | NewMessageActions;
