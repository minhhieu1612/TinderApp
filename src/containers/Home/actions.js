import types from './types';

const fetchRequest = () => ({type: types.FETCH_REQUEST});
const fetchFaild = (message) => ({type: types.FETCH_FAILD, message});
const fetchSuccess = (data) => ({type: types.FETCH_SUCCESS, data});

export {fetchRequest, fetchFaild, fetchSuccess};
