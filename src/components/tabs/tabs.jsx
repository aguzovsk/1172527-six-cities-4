import React from 'react';
import PropTypes from 'prop-types';
import {cityNames} from '../../const.js';

const locationItem = (name, isActive, handler) => {
  const lowerCase = name.toLowerCase();

  return <li key={name} className={`locations__item ${lowerCase}`} onClick={handler}>
    <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`} href="#">
      <span>{name}</span>
    </a>
  </li>;
};

const Tabs = (props) => {
  const {onLogoClick} = props;

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityNames.map(
            (name) => locationItem(name, name === `Amsterdam`, onLogoClick)
        )}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
};

export default Tabs;
