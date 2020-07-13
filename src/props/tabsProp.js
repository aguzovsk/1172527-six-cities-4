import PropTypes from 'prop-types';
import {cityProp} from './offerProp';

export default {
  onCityClick: PropTypes.func.isRequired,
  currentCity: cityProp,
  // citiesList: PropTypes.arrayOf(cityProp)
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired
};
