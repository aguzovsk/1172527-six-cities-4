import React from 'react';
import Main from '../main/main.jsx';
import Details from '../details/details.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropObject} from '../../props/offerProp.js';

import {connect} from "react-redux";
// import {ActionCreator} from '../../reducer.js';

import {Operation as UserOperation, ActionCreator} from '../../reducer/user/user';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
// import {} from '';

import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

import {getCurrentCity, getCurrentOffer} from '../../reducer/app/selectors';
import {getOffersInCity} from '../../reducer/data/selectors';


const WrappedMain = withActiveItem(Main);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      offers: props.offers,
      currentOffer: -1
    };
  }

  _renderApp() {
    const {currentOffer, offers, currentCity} = this.props;

    if (!currentOffer) {
      return <WrappedMain offers={offers} currentCity={currentCity} />;
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
  offers: getOffersInCity(state),
  currentCity: getCurrentCity(state),
  currentOffer: getCurrentOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onCityChange(city) {
    dispatch(AppActionCreator.setCity(city));
  },
  onLogoClick() {
    dispatch(AppActionCreator.backToMain());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
