import React from 'react';
import PropTypes from 'prop-types';

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const locationItem = (name, isActive, handler) => {
  return <li key={name} className={`locations__item ${name}`} onClick={handler}>
    <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`} href="#">
      <span>{capitalize(name)}</span>
    </a>
  </li>;
};

const locationNames = [`paris`, `cologne`, `brussels`, `amsterdam`, `hamburg`, `dusseldorf`];

const Tabs = (props) => {
  const {onTabClickHandler} = props;

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationNames.map(
            (name) => locationItem(name, name === `amsterdam`, onTabClickHandler)
        )}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = {
  onTabClickHandler: PropTypes.func.isRequired,
};

export default Tabs;
export {locationNames};
