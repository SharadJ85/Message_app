import {AuthActions} from './AuthAction/AuthActionTypes';
import {DatabaseActions} from './Database/DatabaseActionTypes';

export type AppAction = AuthActions | DatabaseActions;
