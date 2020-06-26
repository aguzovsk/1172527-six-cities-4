import {cityNames} from '../const.js';
import {getRandomIntInRange} from './utils.js';

const cityCoordinates = new Map();
cityCoordinates.set(`Amsterdam`, {
  latitude: 52.37454,
  longitude: 4.897976,
});
cityCoordinates.set(`Brussels`, {
  latitude: 50.846557,
  longitude: 4.351697,
});
cityCoordinates.set(`Cologne`, {
  latitude: 50.938361,
  longitude: 6.959974,
});
cityCoordinates.set(`Dusseldorf`, {
  latitude: 51.225402,
  longitude: 6.776314,
});
cityCoordinates.set(`Hamburg`, {
  latitude: 53.550341,
  longitude: 10.000654,
});
cityCoordinates.set(`Paris`, {
  latitude: 48.85661,
  longitude: 2.351499,
});

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
