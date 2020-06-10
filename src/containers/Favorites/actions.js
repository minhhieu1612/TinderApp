import types from './types';

const createFavorite = (favorite) => ({
  type: types.CREATE_FAVORITE,
  favorite,
});

const deleteFavorite = (favoriteKey) => ({
  type: types.DELETE_FAVORITE,
  key: favoriteKey,
});

export {createFavorite, deleteFavorite};
