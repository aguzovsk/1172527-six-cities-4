import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import {hotelsPropObject} from '../../props/props.jsx';

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
    const {hotels} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) => <PlaceCard
        key={hotel.id}
        hotel={hotel}
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouseLeaveHandler}
      />)}
    </div>;
  }
}

PlaceList.propTypes = hotelsPropObject;

export default PlaceList;
export {NO_ACTIVE_CARD};
