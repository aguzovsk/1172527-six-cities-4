import React from 'react';

import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlaceListCities from '../place-list-cities/place-list-cities.jsx';
import Map from '../map/map.jsx';

// import {offersPropObject} from '../../props/offerProp.js';
import {offersPropObjectWithCallback} from '../../props/offerProp.js';

const getOffersByCity = (offers, currentCity) => {
  return offers.filter(({city}) => city.name === currentCity.name);
};

const Main = (props) => {
  const {offers, currentCity} = props;
  const {onCityChange, onLogoClick}
  const selectedOffers = getOffersByCity(offers, currentCity);

  return <div className="page page--gray page--main">
    <Header isActiveLink={true} onLogoClick={onLogoClick} />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs onCityChange={onCityChange} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <PlacesSorting />
            <PlaceListCities />
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} offers={selectedOffers} />
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = offersPropObjectWithCallback;

export default Main;
