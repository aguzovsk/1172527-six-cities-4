import React from 'react';
import PropTypes from 'prop-types';

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
    // const {offers, cardType, onTitleClick} = this.props;
    const {listClass, renderCards} = this.props;
    // className={`places__list ${cardType === `cities` ? `cities__places-list tabs__content` : `near-places__list`}`}

    return <div className={`places__list ${listClass}`} >
      {renderCards(this._mouseEnterHandler, this._mouseLeaveHandler)}
    </div>;
  }
}

// PlaceList.propTypes = placeListPropObject;
PlaceList.propTypes = {
  listClass: PropTypes.string.isRequired,
  renderCards: PropTypes.func.isRequired
};

export default PlaceList;
export {NO_ACTIVE_CARD};
