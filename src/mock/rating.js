import {getRandomIntInRange} from './utils.js';

const generateRating = () => {
  const rating = Math.round(getRandomIntInRange(20, 101) / 2);
  return rating / 10;
};

export {generateRating};
