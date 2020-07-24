const cityNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const rentTypes = [`apartment`, `room`, `house`, `hotel`];

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

const cities = cityNames.map((name) => ({
  name,
  location: Object.assign({zoom: 12}, cityCoordinates.get(name))
})).reduce((map, cityObj) => {
  map.set(cityObj.name, cityObj);
  return map;
}, new Map());

export const SortTypes = {
  DEFAULT: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP: `top-rated`
};

export const UNSELECTED_OFFER = null;
export const UNSELECTED_ITEM = undefined;
export const mapObjectCreator = () => new Map();

// const imgPath = `img`;
// const imageNames = [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `studio-01.jpg`];

export {cityCoordinates, cities};
export {cityNames, rentTypes};
// export {imgPath, imageNames};
