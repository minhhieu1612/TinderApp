import types from './types';
const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      state = true;
      break;
    case types.UNLOAD:
      state = false;
      break;
    default:
      state = false;
  }
  return state;
};

export default myReducer;
