import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import Tabs from '../tabs/tabs.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import Header from '../header/header.jsx';

const Main = (props) => {
  const {hotels} = props;

  return <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{hotels.length} places to stay in Amsterdam</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              {hotels.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

export default Main;
