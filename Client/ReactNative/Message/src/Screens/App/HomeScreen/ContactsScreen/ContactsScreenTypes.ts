import {AllContactsList} from '../../../../Redux/Reducers/Database/DatabaseReducerTypes';
import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';

export interface MapDispatchToPropsReturnType {
  ReduxDispatchFetchAllContactsList: (userUid: string) => void;
}

export interface MapStateToPropsReturnType {
  ReduxReducerAllContactsList: null | AllContactsList;
}

export interface ReactProps {}

export type ContactsScreenPropsTypes = HomeScreenStackNavProps<'Contacts'> &
  MapStateToPropsReturnType &
  MapDispatchToPropsReturnType &
  ReactProps;
