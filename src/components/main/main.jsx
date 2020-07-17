import React from 'react';
import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlaceListCities from '../place-list-cities/place-list-cities.jsx';
import Map from '../map/map.jsx';

import {cityProp, offersProp} from '../../props/offerProp.js';

const getOffersByCity = (offers, currentCity) => {
  return offers.filter(({city}) => city.name === currentCity.name);
};

const Main = (props) => {
  const {offers, currentCity} = props;
  const selectedOffers = getOffersByCity(offers, currentCity);

  return <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedOffers.length} places to stay in {currentCity.name}</b>
            <PlacesSorting />
            <PlaceListCities offers={selectedOffers} />
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} offers={selectedOffers} />
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  currentCity: cityProp,
  offers: offersProp
};

export default Main;
