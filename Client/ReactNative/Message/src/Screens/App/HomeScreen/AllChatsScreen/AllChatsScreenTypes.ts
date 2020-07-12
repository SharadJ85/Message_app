import {HomeScreenStackNavProps} from '../../../../Routes/Home/HomeRouteTypes';
import {FirebaseAuthUserType} from '../../../../Redux/Reducers/Auth/AuthReducerTypes';
import {AllContactsList} from '../../../../Redux/Reducers/Database/DatabaseReducerTypes';

export interface ReactProps {}

export interface MapDispatchToPropsReturnType {
  DispatchFetchList: (userID: string) => void;
}

export interface MapStateToPropsReturnType {
  ReduxStateFirebase: FirebaseAuthUserType;
  ReduxStateList: null | AllContactsList;
}

export type AllChatsScreenPropsTypes = HomeScreenStackNavProps<'AllChatsList'> &
  MapStateToPropsReturnType &
  MapDispatchToPropsReturnType &
  ReactProps;
