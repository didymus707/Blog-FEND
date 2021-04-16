import React, { useEffect } from 'react';
import history from './history';
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';

const AuthCheck = (props) => {
  useEffect(() => {
    if (props.auth.isAuthenticated()) {
      props.login_success();
      props.add_profile(props.auth.userProfile);
      history.replace('/');
    } else {
      props.login_failure();
      props.remove_profile();
      history.replace('/');
    }
  });

  return (
    <div></div>
  )
}

export default AuthCheck;