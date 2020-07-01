import React from 'react';
import leaflet from 'leaflet';
import {offersProp, cityProp} from '../../props/offerProp.js';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this._mapRef = React.createRef();
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

    return map;
  }

  _getCoordinatesFromOffers(offers) {
    return offers.map(({location}) => [location.latitude, location.longitude]);
  }

  _addCoordinatesToMap(map, coordinates) {
    coordinates.forEach((coordinateArray) =>
      leaflet.marker(coordinateArray, {icon: this._icon}).addTo(map)
    );
  }

  componentDidMount() {
    const map = this._getConfiguredMap(this.props.city);
    const coordinates = this._getCoordinatesFromOffers(this.props.offers);

    this._addCoordinatesToMap(map, coordinates);
  }

  render() {
    return <div id="map" ref={this._mapRef} style={{width: `100%`}} />;
  }
}

Map.propTypes = {
  city: cityProp,
  offers: offersProp
};

export default Map;
