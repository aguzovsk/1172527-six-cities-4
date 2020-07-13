import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import tabsPropType from '../../props/tabsProp.js';

const locationItem = (name, isActive, handler) => {
  const lowerCase = name.toLowerCase();

  return <li key={name} className={`locations__item ${lowerCase}`} >
    <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`}
      href="#" onClick={(evt) => {evt.persist(); handler(evt)}} >
      <span>{name}</span>
    </a>
  </li>;
};

const Tabs = (props) => {
  const {onCityClick} = props;
  const {citiesList, currentCity} = props;

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList.map(
            (name) => locationItem(name, name === currentCity.name, onCityClick)
        )}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = tabsPropType;

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  citiesList: state.citiesList
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    const city = evt.target.innerText;
    dispatch(ActionCreator.setCity(city));
  }
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
