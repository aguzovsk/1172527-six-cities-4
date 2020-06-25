import {getRandomIntInRange} from './util.js';

const generateHotelPicture = () => {
  const idx = getRandomIntInRange(1, 21);
  return `./img/hotel/${idx}.jpg`;
};

const generateHotelPictures = (num) => {
  const len = num || getRandomIntInRange(6, 10);
  return new Array(len).fill(``).map(() => generateHotelPicture());
};

export {generateHotelPicture, generateHotelPictures};
