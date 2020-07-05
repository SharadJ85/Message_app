import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const myStore = () => {
  return createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default myStore();
