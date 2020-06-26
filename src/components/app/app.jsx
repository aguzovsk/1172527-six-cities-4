import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropObject} from '../../props/offerProp.js';
// import {generateOffers} from '../../mock/offers.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offers: props.offers,
      currentOffer: -1
    };

    this._onTitleClick = this._onTitleClick.bind(this);
  }

  _onTitleClick(offer) {
    if (offer) {
      this.setState({currentOffer: offer.id});
    } else {
      this.setState({currentOffer: -1});
    }
  }

  _renderApp() {
    const {currentOffer, offers} = this.state;

    if (currentOffer === -1 || currentOffer >= offers.length) {
      return <Main offers={offers} onTitleClick={this._onTitleClick} />;
    } else {
      return <Details offer={offers[currentOffer]} onTitleClick={this._onTitleClick} />;
    }
  }

  render() {
    const {offers} = this.state;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/details">
          <Details offer={offers[offers.length - 1]} onTitleClick={this._onTitleClick} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = offersPropObject;

export default App;
