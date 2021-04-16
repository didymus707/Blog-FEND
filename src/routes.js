import React from 'react';
import { Router, Route } from 'react-router';
import Callback from './functional/callback';
import history from './utils/history';

const Routes = props => {
  return (
    <div>
      <Router history = {history}>
        <Route path='/callback' component={ Callback } />
      </Router>
    </div>
  );
}

export default Routes;