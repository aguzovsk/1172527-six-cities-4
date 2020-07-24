import React from 'react';
import {UNSELECTED_ITEM} from '../../const';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: UNSELECTED_ITEM,
      }

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item || UNSELECTED_ITEM,
      });
    }

    render() {
      return (<Component
        {...this.props}
        onSetActiveItem={this._setActiveItem}
        activeItem={this.state.activeItem}
      />);
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
