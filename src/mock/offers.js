import {setLocation} from './location.js';
import {generateRating} from './rating.js';
import {generatePerson} from './person.js';
import {generateText} from './text.js';
import {generateHotelPicture, generateHotelPictures} from './hotelPicture.js';
import {rentTypes} from '../const.js';
import {GetId, getRandomIntInRange, getRandomBool, getShuffled} from './utils.js';

const getId = new GetId();

const generateHotelType = () => {
  const idx = getRandomIntInRange(0, rentTypes.length);
  return rentTypes[idx];
};

const goods = [
  `Air conditioning`,
  `Baby seat`,
  `Breakfast`,
  `Cable TV`,
  `Coffee machine`,
  `Dishwasher`,
  `Fridge`,
  `Heating`,
  `Kitchen`,
  `Laptop friendly workspace`,
  `Towels`,
  `Washer`,
  `Washing machine`,
  `Wi-Fi`
];

const generateGoods = () => {
  const num = getRandomIntInRange(1, goods.length - 3);
  const indices = new Set();

  for (let i = 0; i < num; ++i) {
    indices.add(getRandomIntInRange(0, goods.length));
  }

  const selectedGoods = Array.from(indices).map((index) => goods[index]);

  return getShuffled(selectedGoods);
};

const generateOffer = () => setLocation({
  id: getId.next(),
  previewImage: generateHotelPicture(),
  images: generateHotelPictures(),
  title: generateText(1),
  isFavorite: getRandomBool(0.7),
  isPremium: getRandomBool(0.7),
  rating: generateRating(),
  type: generateHotelType(),
  bedrooms: getRandomIntInRange(1, 8),
  maxAdults: getRandomIntInRange(2, 12),
  price: getRandomIntInRange(80, 600),
  goods: generateGoods(),
  host: generatePerson(),
  description: generateText(),
});


const generateOffers = (num) => {
  // const len = num || Math.max(getRandomIntInRange(-10, 20), 0);
  const len = num || 6;

  return new Array(len).fill(``).map(() => generateOffer());
};

export {generateOffers};
