import {
  RequestRecipientMessagesType,
  ReceiveRecipientMessagesType,
  RecipientMessagesErrorType,
} from './DatabaseActionTypes';
import {} from '../../Reducers/Database/DatabaseReducerTypes';

//actions Strings
export const RECIPIENTMESSAGES_REQUEST = 'RECIPIENTMESSAGES_REQUEST';
export const RECIPIENTMESSAGES_SUCCESS = 'RECIPIENTMESSAGES_SUCCESS';
export const RECIPIENTMESSAGES_FAILURE = 'RECIPIENTMESSAGES_FAILURE';

//main actions
export const requestRecipientMessages = (): RequestRecipientMessagesType => {
  return {
    type: RECIPIENTMESSAGES_REQUEST,
  };
};

export const receiveRecipientMessages = (
  recipient: any,
): ReceiveRecipientMessagesType => {
  return {
    type: RECIPIENTMESSAGES_SUCCESS,
    payload: recipient,
  };
};

export const recipientMessagesError = (
  error: any,
): RecipientMessagesErrorType => {
  return {
    type: RECIPIENTMESSAGES_FAILURE,
    payload: error,
  };
};
