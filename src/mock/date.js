import {DAY, HOUR, MINUTE} from '../utils.js';
import {getRandomIntInRange} from './utils.js';

const dateStartOffset = -7;
const dateEndOffset = 7;

const getRandomDate = () => {
  const targetDate = new Date();
  const days = getRandomIntInRange(dateStartOffset, dateEndOffset);
  const hours = getRandomIntInRange(-12, 12);
  const minutes = getRandomIntInRange(-30, 30);

  targetDate.setTime(targetDate.getTime() + days * DAY + hours * HOUR + minutes * MINUTE);

  return targetDate;
};

export {getRandomDate};
