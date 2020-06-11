import React from 'react';
import PropTypes from 'prop-types';
import Home from '../../components/Home';
import {fetchRequest} from './actions.js';
import {createFavorite} from '../Favorites/actions';
import {connect} from 'react-redux';
const HomeContainer = (props) => {
  return (
    <Home
      loading={props.loading}
      usersData={props.users}
      onFetchUsers={props.onFetchUsers}
      onAddFavorite={props.onAddFavorite}
    />
  );
};

HomeContainer.propTypes = {
  usersData: PropTypes.arrayOf(
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
  ),
  onFetchUsers: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchUsers: () => dispatch(fetchRequest()),
  onAddFavorite: (user) => dispatch(createFavorite(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
