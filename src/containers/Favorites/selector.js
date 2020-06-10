import React from 'react';
import Favorites from '../../components/Favorites';
import {deleteFavorite} from './actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const FavoriteContainer = (props) => {
  return (
    <Favorites
      deleteFavorite={props.deleteFavorite}
      favorites={props.favorites}
    />
  );
};

FavoriteContainer.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
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
  deleteFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log('sta', state);

  return {favorites: state.favorites};
};
const mapDispatchToProps = (distpatch) => ({
  deleteFavorite: (key) => distpatch(deleteFavorite(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
