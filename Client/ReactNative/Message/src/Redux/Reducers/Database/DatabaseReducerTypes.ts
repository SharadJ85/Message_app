export interface Message {
  message: string;
  timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
  type: 'sent' | 'received';
}

export interface ContactDetails {
  messages: Array<Message>;
  uid: string;
  email: string;
  name: string;
}

export type AllContactsList = Array<ContactDetails>;

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
}
