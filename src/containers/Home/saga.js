import {put, call, fork, takeLatest, all} from 'redux-saga/effects';
import ApiCaller from '../../helpers/ApiCaller';
import {fetchRequest, fetchFaild, fetchSuccess} from './actions';
import {loading, unload} from '../Loading/actions';
const URL = 'https://randomuser.me/api/0.4/?randomapi';
function* fetchUsersData() {
  yield put(loading());
  try {
    const res = yield all([
      call(ApiCaller, URL),
      call(ApiCaller, URL),
      call(ApiCaller, URL),
    ]);

    const dataFormat = res.map((ele) => ele.data.results[0].user);
    yield put(fetchSuccess(dataFormat));
    yield put(unload());
  } catch (error) {
    yield put(fetchFaild(error.message));
    yield put(unload());
  }
}

function* watchFetchUsers() {
  yield takeLatest(fetchRequest().type, fetchUsersData);
}
export default function* saga() {
  yield fork(watchFetchUsers);
}
