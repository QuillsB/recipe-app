import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from 'reducers/index';
import rootSaga from 'sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
