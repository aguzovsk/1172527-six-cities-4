import React from 'react';

const locationItem = (name, isActive) => {
  return <li key={name} className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`} href="#">
      <span>{name}</span>
    </a>
  </li>
}

const locationNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Tabs = () => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationNames.map((name) => locationItem(name, name === `Amsterdam`))}
      </ul>
    </section>
  </div>
};

export default Tabs;
