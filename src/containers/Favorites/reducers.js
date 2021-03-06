/* eslint-disable no-lone-blocks */
import types from './types';

const myReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_FAVORITE:
      {
        console.log(action.favorite);

        state.push(action.favorite);
      }
      break;
    case types.DELETE_FAVORITE:
      {
        const index = state.map(({salt}) => salt).indexOf(action.key);
        state.splice(index, 1);
        console.log(index);
      }
      break;
    case types.FETCH_FAILD:
      {
        console.log(action);

        alert(action.message);
      }
      break;
    case types.FETCH_SUCCESS:
      {
        console.log(action);
        state = action.data;
      }
      break;
    default:
      break;
  }

  return [...state];
};

export default myReducer;
