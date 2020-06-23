export const getRandomIntInRange =
  (min, max) => Math.floor(Math.random() * (max - min)) + min;

export class GetId {
  constructor() {
    let id = 0;

    this.next = function () {
      return ++id;
    };
  }
};
