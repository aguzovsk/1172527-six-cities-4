import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropObject} from '../../props/offerProp.js';
import {generateOffers} from '../../mock/offers.js';

const App = (props) => {
  const {offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main offers={offers} />
      </Route>
      <Route exact path="/details">
        <Details offer={generateOffers(1)[0]} />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = offersPropObject;

export default App;
