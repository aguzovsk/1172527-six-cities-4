import {generatePerson} from './person.js';
import {generateText} from './text.js';
import {getRandomIntInRange, GetId} from './utils.js';
import {getRandomDate} from './date.js';
import {generateRating} from './rating.js';

const getId = new GetId();

const generateReview = () => {
  return {
    id: getId.next(),
    user: generatePerson(),
    rating: generateRating(),
    comment: generateText(),
    date: getRandomDate()
  };
};

const generateReviews = (num) => {
  const size = num || getRandomIntInRange(1, 15);

  return new Array(size).fill(``).map(generateReview);
};

export {generateReviews};
