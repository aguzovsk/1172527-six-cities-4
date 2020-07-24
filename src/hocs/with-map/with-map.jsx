import React from 'react';
import leaflet from leaflet;
import {mapObjectCreator} from '../../const';

const withMap = (Component) => {
  class WithMap extends React.Component {
    constructor(props) {
      super(props);

      this._mapRef = React.createRef();

      this._icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      this._iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      this._markerMap = mapObjectCreator();

      this.state = {
        activeMarker: undefined,
      }
    }

    _getLatLngArray({location}) {
      return [location.latitude, location.longitude];
    }

    _addCoordinatesToMap(map, offers) {
      offers.forEach((offer) => {
        const coordinateArray = this._getLatLngArray(offer);
        const marker = leaflet.marker(coordinateArray, {
          icon: this._icon,
          title: offer.title,
        });

        this._markerMap.set(offer, marker);

        marker.addTo(map);
      });
    }

    _getConfiguredMap(offer) {
      const {zoom} = offer.location;
      const coordinates = this._getLatLngArray(offer);

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

    _unsetActiveOffer() {
      const {activeMarker} = this.state;
      if (activeMarker) {
        activeMarker.setIcon(this._icon);
        this.state({
          activeMarker: undefined,
        });
      }
    }

    _setActiveOffer(offer) {
      this._unsetActiveOffer();

      if (offer) {
        let marker = this._markerMap.get(offer);
        if (!marker) {
          // sets marker for first time for current offer if it is unset
          marker = leaflet.marker(this._getLatLngArray(offer), {
            icon: this._icon,
            title: offer.title,
          });
          this._markerMap.set(offer, marker);
        }

        marker.setIcon(this._iconActive);
        this._activeMarker = marker;

      } else if (this.props.currentPlace) {
        this._setActiveOffer(this.props.currentPlace);
      }
    }

    componentDidMount() {
      const {city, offers} = this.props;
      const map = this._getConfiguredMap(city);
      // const coordinates = this._getCoordinatesFromOffers(props.offers);

      this._addCoordinatesToMap(map, offers);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.city.name !== this.props.city.name) {
        const coord = this._getLatLngArray(this.props.city);
        this._mapRef.current.panTo(coord, {
          animate: true,
          duration: 3,
          easeLinearity: 4,
          noMoveStart: true
        });
      }

      if (prevProps.hoveredOffer !== this.props.hoveredOffer) {
        this._setActiveOffer(this.props.hoveredOffer);
      }
    }
  }
}
