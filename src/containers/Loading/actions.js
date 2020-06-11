import types from './types.js';

const loading = () => ({type: types.LOADING});
const unload = () => ({type: types.UNLOAD});

export {loading, unload};
