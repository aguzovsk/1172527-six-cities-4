import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropObject} from '../../props/offerProp.js';

import {connect} from "react-redux";
import {ActionCreator} from '../../reducer.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offers: props.offers,
      currentOffer: -1
    };
  }

  _renderApp() {
    const {currentOffer, offers, currentCity} = this.props;

    if (!currentOffer) {
      return <Main offers={offers} currentCity={currentCity} />;
    } else {
      const offer = offers.find(({id}) => id === currentOffer.id);

      if (offer) {
        return <Details offer={offer} />;
      }

      return null;
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
          <Details offer={offers[offers.length - 1]} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = offersPropObject;

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentCity: state.currentCity,
  currentOffer: state.currentOffer
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.setCity(city));
  },

  onLogoClick() {
    dispatch(ActionCreator.backToMain());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
