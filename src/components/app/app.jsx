import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {hotelsPropObject} from '../../props/props.jsx';

const App = (props) => {
  const {hotels} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main hotels={hotels} />
      </Route>
      <Route exact path="/details">
        <Details />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = hotelsPropObject;

export default App;
