import {
  call,
  fork,
  takeLatest,
  put,
  takeEvery,
  all,
  select,
} from 'redux-saga/effects';

import {
  fetchRequest,
  fetchFaild,
  fetchSuccess,
  createFavorite,
  deleteFavorite,
} from './actions';
import {loading, unload} from '../Loading/actions';
import AsyncStorage from '@react-native-community/async-storage';

function* fetchFavoritesData() {
  yield put(loading());
  try {
    const res = yield call(AsyncStorage.getItem, 'favorites');
    const dataFormat = JSON.parse(res);
    yield put(fetchSuccess(dataFormat));
    yield put(unload());
  } catch (error) {
    yield put(fetchFaild(error.message));
    yield put(unload());
  }
}

function* updateFavoritesStorage() {
  const {favorites} = yield select();
  yield call(AsyncStorage.setItem, 'favorites', JSON.stringify(favorites));
}

function* watchCreateFavorite() {
  yield takeEvery(createFavorite().type, updateFavoritesStorage);
}

function* watchDeleteFavorite() {
  yield takeEvery(deleteFavorite().type, updateFavoritesStorage);
}

function* watchFetchFavorite() {
  yield takeLatest(fetchRequest().type, fetchFavoritesData);
}

export default function* saga() {
  yield all([
    fork(watchFetchFavorite),
    fork(watchCreateFavorite),
    fork(watchDeleteFavorite),
  ]);
}
