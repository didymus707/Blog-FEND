import React, { useEffect } from 'react';
import history from './history';
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';
import axios from 'axios';

const AuthCheck = (props) => {
  const send_profile_to_db = profile => {
    const data = profile;
    axios.post('/api/posts/userprofiletodb', data)
      .then(() => {
        axios.get('/api/get/userprofiletodb', {params: {email: profile.profile.email}})
          .then(res => props.set_db_profile(res.data))
      })
      .then(history.replace('/'))
  }
  
  useEffect(() => {
    if (props.auth.isAuthenticated()) {
      props.login_success();
      props.add_profile(props.auth.userProfile);
      props.send_profile_to_db(props.auth.userprofile);
      history.replace('/');
    } else {
      props.login_failure();
      props.remove_profile();
      props.remove_db_profile();
      history.replace('/');
    }
  });

  return (
    <div></div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: profile => dispatch(ACTIONS.add_profile(profile)),
    remove_failure: () => dispatch(ACTIONS.remove_profile()),
    set_db_profile: profile => dispatch(ACTIONS.set_db_profile()),
    remove_db_profile: () => dispatch(ACTIONS.remove_db_profile())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);