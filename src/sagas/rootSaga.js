import { fork } from 'redux-saga/effects';

import {
  watchGetSearchByQuerySaga
} from 'sagas/searchSaga';

export default function* rootSaga() {
  yield fork(watchGetSearchByQuerySaga);
}