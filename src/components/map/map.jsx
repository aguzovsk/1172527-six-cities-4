import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offersProp, cityProp, offerProp} from '../../props/offerProp.js';

import {connect} from 'react-redux';
// import {ActionCreator} from '../../reducer';
import {mapObjectCreator} from '../../const';

class Map extends React.PureComponent {
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

    this._markerMap = mapObjectCreator();
    this._activeMarker = undefined;

    this._mapRef = React.createRef();

    this._setActiveOffer = this._setActiveOffer.bind(this);

    this._setActiveOffer(props.currentPlace);
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

  _getLatLngArray({location}) {
    return [location.latitude, location.longitude];
  }

  _addCoordinatesToMap(map, offers) {
    offers.forEach((offer) => {
      const loc = offer.location;
      const coordinateArray = [loc.latitude, loc.longitude];
      const marker = leaflet.marker(coordinateArray, {
        icon: this._icon,
        title: offer.title,
      });

      this._markerMap.set(offer, marker);

      marker.addTo(map);
    });
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

  _unsetActiveOffer() {
    if (this._activeMarker) {
      this._activeMarker.setIcon(this._icon);
      this._activeMarker = undefined;
    }
  }

  print(props) {
    const {city, offers} = props;
    const map = this._getConfiguredMap(city);
    // const coordinates = this._getCoordinatesFromOffers(props.offers);

    this._addCoordinatesToMap(map, offers);
  }

  componentDidMount() {
    this.print(this.props);
  }

  render() {
    return <div id="map" className={`map ${this.props.mapClass}`} ref={this._mapRef} style={{width: `100%`}} />;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city.name !== this.props.city.name) {
      const location = this.props.city.location;

      const coord = [location.latitude, location.longitude];
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

  // componentWillUpdate(nextProps) {
  //   this._addCoordinatesToMap(this._map, nextProps.offers);
  //   const location = nextProps.city.location;
  //   const coord = [location.latitude, location.longitude];
  //   leaflet.marker(coord, {icon: this._iconActive}).addTo(this._map);
  //   this._map.panTo(coord, {
  //     animate: true,
  //     duration: 3,
  //     easeLinearity: 4,
  //     noMoveStart: true
  //   });

  // }
}

Map.propTypes = {
  city: cityProp,
  offers: offersProp,
  mapClass: PropTypes.string,
  hoveredOffer: PropTypes.exact(offerProp),
  currentPlace: PropTypes.oneOfType([PropTypes.exact(offerProp), PropTypes.oneOf([``])])
};

const mapStateToProps = (state) => ({
  // city: state.currentOffer && state.currentOffer.city || state.currentCity,
  currentPlace: state.currentOffer,
  hoveredOffer: state.hoveredOffer,
});

// const mapDispatchToProps = (dispatch) => ({
//   onMouseEnter(offer) {
//     dispatch(ActionCreator.setHoveredOffer(offer));
//   },
//   onMouseLeave() {
//     dispatch(ActionCreator.unsetHoveredOffer());
//   }
// });

export {Map};
export default connect(mapStateToProps)(Map);
