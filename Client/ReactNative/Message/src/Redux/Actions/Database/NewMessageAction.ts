import {
  NewMessageErrorType,
  ReceiveNewMessageType,
  RequestNewMessageType,
} from './DatabaseActionTypes';
import {} from '../../Reducers/Database/DatabaseReducerTypes';

//actions Strings
export const NEWMESSAGE_REQUEST = 'NEWMESSAGE_REQUEST';
export const NEWMESSAGE_SUCCESS = 'NEWMESSAGE_SUCCESS';
export const NEWMESSAGE_FAILURE = 'NEWMESSAGE_FAILURE';

//main actions
export const requestNewMessage = (): RequestNewMessageType => {
  return {
    type: NEWMESSAGE_REQUEST,
  };
};

export const receiveNewMessage = (): ReceiveNewMessageType => {
  return {
    type: NEWMESSAGE_SUCCESS,
  };
};

export const newMessageError = (error: any): NewMessageErrorType => {
  return {
    type: NEWMESSAGE_FAILURE,
    payload: error,
  };
};
