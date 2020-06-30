import {cityNames} from '../const.js';
import {getRandomIntInRange} from './utils.js';
import {cityCoordinates} from '../const.js';

const getRandomCoordinate = (coordinate) => {
  const radius = 0.055;
  const sign = Math.sign(Math.random() - 0.5);
  const distance = radius * Math.random();

  return coordinate + sign * distance;
};

const getRandomLocation = ({latitude, longitude}) => {
  return {
    latitude: getRandomCoordinate(latitude),
    longitude: getRandomCoordinate(longitude)
  };
};

const addZoom = (coordinates, zoom) => {
  return Object.assign({}, coordinates, {zoom});
};

const setLocation = (obj, givenCity) => {
  const cityIdx = getRandomIntInRange(0, cityNames.length);
  const city = givenCity || cityNames[cityIdx];
  const cityLocation = cityCoordinates.get(city);

  const cityObj = {
    city: {
      name: city,
      location: addZoom(cityLocation, 13)
    }
  };

  const locationObj = {
    location: addZoom(getRandomLocation(cityLocation), 16)
  };

  return Object.assign(obj, cityObj, locationObj);
};

export {setLocation};
