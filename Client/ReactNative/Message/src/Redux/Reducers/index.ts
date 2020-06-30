import {combineReducers} from 'redux';
import FirebaseAuthReducer from './Auth/AuthReducer';

const allReducers = combineReducers({
  Auth: FirebaseAuthReducer,
});

export default allReducers;
