import React from 'react';
import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlaceListCities from '../place-list-cities/place-list-cities.jsx';
import MapCities from '../map-cities/map-cities.jsx';

import {cityProp, offersProp} from '../../props/offerProp.js';
import {cities, UNSELECTED_ITEM} from '../../const';

const getOffersByCity = (offers, currentCity) => {
  return offers.filter(({city}) => city.name === currentCity.name);
};

const Main = (props) => {
  const {onSetActiveItem, activeItem, offers} = props;
  const activeCity = activeItem === UNSELECTED_ITEM ? cities.get(`Amsterdam`) : activeItem;


  // const {offers, currentCity} = props;
  const selectedOffers = getOffersByCity(offers, activeCity);
  const isEmpty = selectedOffers.length === 0;

  return <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeItem={activeCity} onSetActiveItem={onSetActiveItem} />
      <div className="cities">
        <div className={`cities__places-container ${isEmpty ? `cities__places-container--empty` : ``} container`}>
          {isEmpty ?
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property availbale at the moment in {activeItem.name}</p>
              </div>
            </section> :
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {activeCity.name}</b>
              <PlacesSorting />
              <PlaceListCities offers={selectedOffers} />
            </section>
          }
          <div className="cities__right-section">
            {!isEmpty && <MapCities currentCity={activeCity} offers={offers} />}
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  activeItem: cityProp,
  offers: offersProp
};

export default Main;
