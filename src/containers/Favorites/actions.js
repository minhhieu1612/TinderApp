import types from './types';

const createFavorite = (favorite) => ({type: types.CREATE_FAVORITE, favorite});

const deleteFavorite = (key) => ({type: types.DELETE_FAVORITE, key});

const fetchRequest = () => ({type: types.FETCH_REQUEST});

const fetchFaild = (message) => ({type: types.FETCH_FAILD, message});

const fetchSuccess = (data) => ({type: types.FETCH_SUCCESS, data});

export {createFavorite, deleteFavorite, fetchRequest, fetchFaild, fetchSuccess};
