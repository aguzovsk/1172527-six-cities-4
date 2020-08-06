import React from 'react';
import {connect} from 'react-redux';;
import {SortTypes} from '../../const.js';
import PropTypes from 'prop-types';
import {getSortType} from '../../reducer/app/selectors';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';

const sortValues = {
  [SortTypes.DEFAULT]: `Popular`,
  [SortTypes.TO_HIGH]: `Price: low to high`,
  [SortTypes.TO_LOW]: `Price: high to low`,
  [SortTypes.TOP]: `Top rated first`
};

const placeOption = (key, value, isSelected, onClick) => {
  return <li
    key={key}
    className={`places__option ${isSelected && `places__option--active`}`}
    data-value={key}
    onClick={(e) => onClick(e.target.dataset.value)}
    tabIndex="0">
    {value}
  </li>;
};

const renderOptions = (options, selected, onClick) => {
  return Object.entries(options)
    .map(
        (pair) => placeOption(pair[0], pair[1], pair[0] === selected, onClick)
    );
};

const PlacesSorting = (props) => {
  const {active} = props;
  const {onClick} = props;
  const onSortTypeClick = (e) => {
    e.target.nextElementSibling.classList.toggle(`places__options--opened`);
  };

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0" onClick={onSortTypeClick}>
      {sortValues[active]}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom">
      {renderOptions(sortValues, active, onClick)}
    </ul>
  </form>;
};

PlacesSorting.propTypes = {
  active: PropTypes.oneOf(Object.values(SortTypes)),
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  active: getSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClick(sortType) {
    dispatch(AppActionCreator.changeSorting(sortType));
  }
});

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
