import {getRandomIntInRange, GetId} from './utils.js';
import {cityNames} from '../const.js';

const cityLocation = new Map();
cityLocation.set(`Amsterdam`, {
  latitude: 52.37454,
  longitude: 4.897976,
});
cityLocation.set(`Brussels`, {
  latitude: 50.846557,
  longitude: 4.351697,
});
cityLocation.set(`Cologne`, {
  latitude: 50.938361,
  longitude: 6.959974,
});
cityLocation.set(`Dusseldorf`, {
  latitude: 51.225402,
  longitude: 6.776314,
});
cityLocation.set(`Hamburg`, {
  latitude: 53.550341,
  longitude: 10.000654,
});
cityLocation.set(`Paris`, {
  latitude: 48.85661,
  longitude: 2.351499,
});

const getLocation = () => {
  const cityIdx = getRandomIntInRange(0, cityNames.length);
  const city = cityNames[cityIdx];

};

export const hotels =
  [
    {
      id: 1,
      title: `Beautiful &amp; luxurious apartment at great location`,
      type: `apartment`,
      previewImage: `img/apartment-01.jpg`,
      price: 120,
      rating: `93%`,
      isPremium: true,
      isFavourite: false,
      city: {
        name: `Amsterdam`,
      }
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `room`,
      previewImage: `img/room.jpg`,
      price: 80,
      rating: `80%`,
      isPremium: false,
      isFavourite: true,
      city: {
        name: `Amsterdam`,
      }
    },
    {
      id: 3,
      title: `Canal View Prinsengracht`,
      type: `apartment`,
      previewImage: `img/apartment-02.jpg`,
      price: 132,
      rating: `80%`,
      isPremium: false,
      isFavourite: false,
      city: {
        name: `Amsterdam`,
      }
    },
    {
      id: 4,
      title: `Nice, cozy, warm big bed apartment`,
      type: `apartment`,
      previewImage: `img/apartment-03.jpg`,
      price: 180,
      rating: `100%`,
      isPremium: false,
      isFavourite: false,
      city: {
        name: `Amsterdam`,
      }
    },
    {
      id: 5,
      title: `Wood and stone place`,
      type: `room`,
      previewImage: `img/room.jpg`,
      price: 80,
      rating: `80%`,
      isPremium: false,
      isFavourite: true,
      city: {
        name: `Amsterdam`,
      }
    }
  ];




