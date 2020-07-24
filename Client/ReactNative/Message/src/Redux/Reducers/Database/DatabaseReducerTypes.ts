export interface Message {
  message: string;
  timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
  type: 'sent' | 'received';
}

export interface ContactDetails {
  uid: string;
  email: string;
  name: string;
}

export type AllContactsList = Array<ContactDetails>;

export interface Recipient extends ContactDetails {
  messages: Array<Message>;
}

export interface DatabaseState {
  allContactsList: {
    isRequesting: boolean;
    allContactsListError: boolean;
    error: null | {};
    list: null | AllContactsList;
  };
  newUser: {
    isRequesting: boolean;
    newUserError: boolean;
    error: null | {};
  };
  recipient: {
    isRequesting: boolean;
    recipientMessagesError: boolean;
    error: null | {};
    recipient: null | Recipient;
  };
}
