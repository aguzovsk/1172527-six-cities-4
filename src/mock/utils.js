export const getRandomIntInRange =
  (min, max) => Math.floor(Math.random() * (max - min)) + min;

export class GetId {
  constructor() {
    let id = 0;

    this.next = function () {
      return ++id;
    };
  }
}

export const getRandomBool = (bar) => {
  const threshold = bar || 0.5;
  return Math.random() >= threshold;
};

export const getShuffled = (input) => {
  const items = input.slice();
  for (let i = items.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};
