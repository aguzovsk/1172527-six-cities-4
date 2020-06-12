import React from 'react';

const sortValues = {
  popular: `Popular`,
  'to-high': `Price: low to high`,
  'to-low': `Price: high to low`,
  'top-rated': `Top rated first`
};

const placeOption2 = (key, value, isSelected) => {
  return <li key={key} className={`places__option ${isSelected && `places__option--active`}`} data-value={key} tabIndex="0">{value}</li>
}

const renderOptions = (options, selected) => {
  return Object.entries(options)
    .map(
      (pair) => placeOption2(pair[0], pair[1], pair[0] === selected)
    );
}

const PlacesSorting = () => {
  const active = `popular`;

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0">
      {active}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {renderOptions(sortValues, active)}
    </ul>
  </form>
};

export default PlacesSorting;
