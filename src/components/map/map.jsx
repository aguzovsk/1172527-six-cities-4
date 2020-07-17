import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offersProp, cityProp, offerProp} from '../../props/offerProp.js';
import PlaceCard from '../place-card/place-card.jsx';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this._iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this._mapRef = React.createRef();
    this._map = null;
  }

  _getConfiguredMap({location}) {
    const {latitude, longitude, zoom} = location;
    const coordinates = [latitude, longitude];

    const map = leaflet.map(this._mapRef.current, {
      center: coordinates,
      zoom,
      zoomControl: false
    });

    map.setView(coordinates, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);
    leaflet.marker(coordinates, {icon: this._iconActive}).addTo(map);

    return map;
  }

  // _getCoordinatesFromOffers(offers) {
  //   return offers.map(({location}) => [location.latitude, location.longitude]);
  // }

  _addCoordinatesToMap(map, offers) {
    const dummy = () => {};
    offers.forEach((offer) => {
        const loc = offer.location;
        const coordinateArray = [loc.latitude, loc.longitude];
        const popup = leaflet.popup().setContent(
          <PlaceCard
            onMouseLeave={dummy}
            onMouseEnter={dummy}
            onTitleClick={dummy}
            offer={offer}
            cardClass="cities__place-card"
            imageWrapperClass="cities__image-wrapper"
          />
        );
        leaflet.marker(coordinateArray, {
          icon: this._icon,
          title: offer.title,
        }).addTo(map).bindPopup(popup);
      }
    );
  }

  print(props) {
    const {currentPlace, city} = props;
    const map = this._getConfiguredMap(currentPlace || city);
    // const coordinates = this._getCoordinatesFromOffers(props.offers);

    this._addCoordinatesToMap(map, props.offers);

    this._map = map;
  }

  componentDidMount() {
    this.print(this.props);
  }

  render() {
    return <div id="map" className={`map ${this.props.mapClass}`} ref={this._mapRef} style={{width: `100%`}} />;
  }

  componentWillUpdate(nextProps) {
    this._addCoordinatesToMap(this._map, nextProps.offers);
    const location = nextProps.city.location;
    const coord = [location.latitude, location.longitude];
    leaflet.marker(coord, {icon: this._iconActive}).addTo(this._map);
    this._map.panTo(coord, {
      animate: true,
      duration: 3,
      easeLinearity: 4,
      noMoveStart: true
    });

  }

  componentWillUnmount() {
    const map = this._mapRef.current;

    map.remove();
  }
}

Map.propTypes = {
  city: cityProp,
  offers: offersProp,
  mapClass: PropTypes.string,
  currentPlace: PropTypes.oneOfType([PropTypes.exact(offerProp), PropTypes.oneOf([``])])
};

Map.defaultProps = {
  currentPlace: ``,
  mapClass: `cities__map`
};

export default Map;
