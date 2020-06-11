import {all, fork, select, takeEvery} from 'redux-saga/effects';
import {saga as users} from '../containers/Home';
import {saga as favorites} from '../containers/Favorites';

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  });
}

export default function* rootSaga() {
  yield all([fork(users), fork(favorites), fork(watchAndLog)]);
}
