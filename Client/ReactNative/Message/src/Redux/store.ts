import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const sagaMiddleware = createSagaMiddleware();

const myStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  return store;
};

export default myStore();
