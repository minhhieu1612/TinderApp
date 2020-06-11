/* eslint-disable no-lone-blocks */
import types from './types';

const myReducer = (state = [], action) => {
  // console.log(state);

  switch (action.type) {
    case types.FETCH_FAILD:
      {
        console.log(action);
        alert(action.message);
      }
      break;
    case types.FETCH_SUCCESS:
      {
        // console.log(action);
        state = action.data;
      }
      break;
    default:
      break;
  }
  return [...state];
};

export default myReducer;
