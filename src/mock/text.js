import {getRandomIntInRange} from './utils.js';

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const sentences = text.split(`. `).map((txt) => txt + (txt.endsWith(`.`) ? ` ` : `. `));

const getShuffled = (input) => {
  const items = input.slice();
  for (let i = items.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

const generateText = (len) => {
  const length = len || getRandomIntInRange(2, 5);
  const description = getShuffled(sentences).slice(0, length + 1).join(``);
  return description;
};

export {generateText};
