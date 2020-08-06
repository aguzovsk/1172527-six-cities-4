import City from './city';
import Location from './location';
import User from './user';

class Offer {
  constructor(datum) {
    this.id = Number.parseInt(datum.id);
    this.city = new City(datum.city);;
    this.location = new Location(datum.location);
    this.host = new User(datum.host);

    this.previewImage = datum.preview_image;
    this.isPremium = JSON.parse(datum.is_premium);
    this.isFavorite = JSON.parse(datum.is_favorite);
    this.price = Number.parseInt(datum.price);
    this.title = datum.title;
    this.type = datum.type;
    this.rating = Number.parseFloat(datum.rating);

    this.images = [...datum.images];
    this.description = datum.description;
    this.bedrooms = Number.parseInt(datum.bedrooms);
    this.maxAdults = Number.parseInt(datum.max_adults);
    this.goods = [...datum.goods];
  }

  static parseOffersArray(offers) {
    return offers.map((offer) => new Offer(offer));
  }
}

export default Offer;
