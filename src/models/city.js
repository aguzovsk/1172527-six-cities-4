import Location from './location';

class City {
  constructor(datum) {
    this.name = datum.name;
    this.location = new Location(datum.location);
  }
}

export default City;
