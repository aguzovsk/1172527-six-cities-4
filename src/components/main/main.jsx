import React from 'react';

import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlaceListCities from '../place-list-cities/place-list-cities.jsx';
import Map from '../map/map.jsx';
import {cities} from '../../const.js';

// import {offersPropObject} from '../../props/offerProp.js';
import {offersPropObjectWithCallback} from '../../props/offerProp.js';

const getOffersByCity = (offers, cityName) => {
  return offers.filter(({city}) => city.name === cityName);
};


const Main = (props) => {
  const {offers, onTitleClick} = props;
  const onTabClickHandler = () => {};
  const selectedCity = `Amsterdam`;
  const selectedOffers = getOffersByCity(offers, selectedCity);

  return <div className="page page--gray page--main">
    <Header isActiveLink={true} onTitleClick={onTitleClick} />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs onTabClickHandler={onTabClickHandler} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <PlacesSorting />
            <PlaceListCities offers={offers} onTitleClick={onTitleClick} />
          </section>
          <div className="cities__right-section">
            <Map city={cities.get(selectedCity)} offers={selectedOffers} />
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = offersPropObjectWithCallback;

export default Main;
