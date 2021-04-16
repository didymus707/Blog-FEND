import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from './utils/auth';
import Routes from './routes';

const App = props => {
  const [hello, setHello] = useState(null);
  useEffect(() =>
    axios.get('/hello')
      .then(res => setHello(res.data))
      .catch(err => console.log(err))
  )

  const auth = new Auth();

  return (
    <div>
    <button onClick={() => auth.login()}>Login</button>
      <h1>{ hello ? <div>{ hello}</div> : null }</h1>
      <Routes />
    </div>
  );
}

export default App;
