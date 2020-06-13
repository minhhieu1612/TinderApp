import React from 'react';
import Loading from '../../components/Loading';
import {connect} from 'react-redux';

const LoadingContainer = (props) => {
  return <Loading {...props} />;
};

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
