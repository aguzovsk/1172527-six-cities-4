import User from './user';

class Review {
  constructor(datum) {
    this.id = Number.parseInt(datum.id);
    this.user = new User(datum.user);
    this.rating = Number.parseFloat(datum.rating);
    this.comment = datum.comment;
    this.date = new Date(datum.date);
  }
}

export default Review;
