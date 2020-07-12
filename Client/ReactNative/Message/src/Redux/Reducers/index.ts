import {combineReducers} from 'redux';
import FirebaseAuthReducer from './Auth/AuthReducer';
import DatabaseReducer from './Database/DatabaseReducer';

const allReducers = combineReducers({
  Auth: FirebaseAuthReducer,
  Firestore: DatabaseReducer,
});

export default allReducers;

export type AppState = ReturnType<typeof allReducers>;
