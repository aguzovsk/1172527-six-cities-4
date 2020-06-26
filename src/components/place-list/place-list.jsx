import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import {placeListPropObject} from '../../props/placeProp.js';

const NO_ACTIVE_CARD = Number.EPSILON;

class PlaceList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: NO_ACTIVE_CARD
    };

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
  }

  _mouseEnterHandler(card) {
    this.setState({
      activeCard: card.id
    });
  }

  _mouseLeaveHandler() {
    this.setState({
      activeCard: NO_ACTIVE_CARD
    });
  }

  render() {
    const {offers, cardType, onTitleClick} = this.props;

    return <div className={`places__list ${cardType === `cities` ? `cities__places-list tabs__content` : `near-places__list`}`}>
      {offers.map((offer) => <PlaceCard
        key={offer.id}
        offer={offer}
        cardType={cardType}
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouseLeaveHandler}
        onTitleClick={onTitleClick}
      />)}
    </div>;
  }
}

PlaceList.propTypes = placeListPropObject;

export default PlaceList;
export {NO_ACTIVE_CARD};
