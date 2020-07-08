import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {firebaseVerify} from './Services/AuthServices/FirebaseVerify';

const myStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  store.dispatch(firebaseVerify());
  return store;
};

export default myStore();
