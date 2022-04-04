import {
  call, put, takeLatest, select
} from 'redux-saga/effects';

import {
  GET_SEARCH_BY_QUERY,
  getSearchByQueryResponse,
} from 'actions/searchActions';

function* getSearchByQueryFunction(action) {
  try {
    console.log(action.payload);
    yield put(getSearchByQueryResponse([]));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetSearchByQuerySaga() {
  yield takeLatest(GET_SEARCH_BY_QUERY, getSearchByQueryFunction);
}
