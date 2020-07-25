import {DatabaseActions} from '../../Actions/Database/DatabaseActionTypes';
import {DatabaseState} from './DatabaseReducerTypes';

export const initialState: DatabaseState = {
  allContactsList: {
    isRequesting: false,
    allContactsListError: false,
    error: null,
    list: null,
  },
  newUser: {
    isRequesting: false,
    newUserError: false,
    error: null,
  },
};

const DatabaseReducer = (
  state = initialState,
  action: DatabaseActions,
): DatabaseState => {
  switch (action.type) {
    case 'ALLCONTACTSLIST_REQUEST':
      return {
        ...state,
        allContactsList: {
          ...state.allContactsList,
          isRequesting: true,
          allContactsListError: false,
          error: null,
        },
      };
    case 'ALLCONTACTSLIST_SUCCESS':
      return {
        ...state,
        allContactsList: {
          ...state.allContactsList,
          isRequesting: false,
          list: action.payload,
        },
      };
    case 'ALLCONTACTSLIST_FAILURE':
      return {
        ...state,
        allContactsList: {
          ...state.allContactsList,
          isRequesting: false,
          allContactsListError: true,
          error: action.payload,
        },
      };
    case 'NEWUSER_REQUEST':
      return {
        ...state,
        newUser: {
          isRequesting: true,
          newUserError: false,
          error: null,
        },
      };
    case 'NEWUSER_SUCCESS':
      return {
        ...state,
        newUser: {
          ...state.newUser,
          isRequesting: false,
        },
      };
    case 'NEWUSER_FAILURE':
      return {
        ...state,
        newUser: {
          isRequesting: false,
          newUserError: true,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default DatabaseReducer;
