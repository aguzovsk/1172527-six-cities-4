import React from 'react';
import Main from '../main/main.jsx';
import {hotelsPropObject} from '../../props/props.jsx';

const App = (props) => {
  const {hotels} = props;

  return <Main
    hotels={hotels}
  />;
};

App.propTypes = hotelsPropObject;

export default App;
