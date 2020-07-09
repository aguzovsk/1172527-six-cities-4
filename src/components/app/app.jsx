import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropObject} from '../../props/offerProp.js';
// import {generateOffers} from '../../mock/offers.js';

import {connect} from "react-redux";
import {ActionCreator, UNSELECTED_OFFER} from '../../reducer.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offers: props.offers,
      currentOffer: -1
    };

    this._onTitleClick = this._onTitleClick.bind(this);
  }

  // _onTitleClick(offer) {
  //   if (offer) {
  //     this.setState({currentOffer: offer.id});
  //   } else {
  //     this.setState({currentOffer: -1});
  //   }
  // }

  // _renderApp() {
  //   const {currentOffer, offers} = this.state;

  //   if (currentOffer === -1 || currentOffer >= offers.length) {
  //     return <Main offers={offers} onTitleClick={this._onTitleClick} />;
  //   } else {
  //     return <Details offer={offers[currentOffer]} onTitleClick={this._onTitleClick} />;
  //   }
  // }

  _renderApp() {
    const {currentOffer, offers} = this.props;
    const {onTitleClick, onCityChange} = this

    if (currentOffer === UNSELECTED_OFFER || currentOffer >= offers.length) {
      return <Main offers={offers} onLogoClick={onLogoClick} onCityChange={onCityChange} />
    } else {
      const offer = offers.find(({id}) => id === currentOffer);

      if (offer) {
        return <Details offer={offer} onTitleClick={onTitleClick} />;
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
          <Details offer={offers[offers.length - 1]} onTitleClick={this._onTitleClick} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

const initialState = {
  currentOffer: -1,
  currentCity: cityCoordinates.get(`Amsterdam`),
  offers: generateOffers()
};

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
  onTitleClick(offer) {
    dispatch(ActionCreator.setOffer(offer));
  },
  onLogoClick() {
    dispatch(ActionCreator.backToMain());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
