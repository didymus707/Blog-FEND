import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState(null);
  useEffect(() =>
    axios.get('/hello')
      .then(res => setHello(res.data))
      .catch(err => console.log(err))
  )

  return (
    <div>
      { hello ? <div>{ hello}</div> : null }
    </div>
  );
}

export default App;
