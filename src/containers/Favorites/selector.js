import React from 'react';
import Favorites from '../../components/Favorites';
import {deleteFavorite, fetchRequest} from './actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const FavoriteContainer = (props) => {
  return (
    <Favorites
      favorites={props.favorites}
      onFetchFavorites={props.onFetchFavorites}
      onDeleteFavorite={props.onDeleteFavorite}
    />
  );
};

FavoriteContainer.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      salt: PropTypes.string.isRequired,
      name: PropTypes.shape({
        title: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
        first: PropTypes.string.isRequired,
      }).isRequired,
      location: PropTypes.shape({
        street: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      }),
      phone: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      registered: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteFavorite: PropTypes.func.isRequired,
  onFetchFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {favorites: state.favorites};
};
const mapDispatchToProps = (distpatch) => ({
  onDeleteFavorite: (key) => distpatch(deleteFavorite(key)),
  onFetchFavorites: () => distpatch(fetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
