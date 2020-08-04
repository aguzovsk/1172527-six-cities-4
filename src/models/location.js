class Location {
  constructor(datum) {
    this.latitude = Number(datum.latitude);
    this.longitude = Number(datum.longitude);
    this.zoom = Number(datum.zoom);
  }
}

export default Location;
