import React from 'react'
import Main from '../main/main.jsx';

const App = (props) => {
  const {hotels} = props;

  return <Main
    hotels={hotels}
  />;
};

export default App;
