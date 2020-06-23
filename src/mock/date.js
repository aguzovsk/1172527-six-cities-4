import {DAY, HOUR, MINUTE} from '../utils.js';

const getRandomDate = () => {
  const targetDate = new Date();
  const days = getRandomIntInRange(dateStartOffset, dateEndOffset);
  const hours = getRandomIntInRange(-12, 12);
  const minutes = getRandomIntInRange(-30, 30);

  targetDate.setTime(targetDate.getTime() + days * DAY + hours * HOUR + minutes * MINUTE);

  return targetDate;
};

export {getRandomDate};
