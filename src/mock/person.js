import {maleNames, femaleNames} from './names.js';
import {getRandomIntInRange, GetId} from './utils.js';

const getRandomName = (isFemale) => {
  const names = isFemale ? femaleNames : maleNames;
  const nameIdx = getRandomIntInRange(0, names.length);

  return names[nameIdx];
};

const getRandomAvatar = (isFemale) => {
  const idx = getRandomIntInRange(0, 100);
  const sex = isFemale ? `women` : `men`;
  const avatarUrl = `https://randomuser.me/api/portraits/${sex}/${idx}.jpg`;

  return avatarUrl;
};

const generatePerson = () => {
  const isFemale = Math.random() < 0.5;
  const getId = new GetId();

  return {
    id: getId.next(),
    name: getRandomName(isFemale),
    isPro: Math.random() < 0.5,
    avatar: getRandomAvatar(isFemale)
  };
};

export {generatePerson};
