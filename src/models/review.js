import User from './user';

class Review {
  constructor(datum) {
    this.id = Number.parseInt(datum.id);
    this.user = new User(datum.user);
    this.rating = Number.parseFloat(datum.rating);
    this.comment = datum.comment;
    this.date = new Date(datum.date);
  }

  toRaw() {
    const rating = Number(this.rating.toFixed(1));
    const isInt = Number.isInteger(rating);

    return {
      'rating': isInt ? String(rating) : rating.toFixed(1),
      'comment': this.comment,
    }
  }

  static parseReviewsArray(reviews) {
    return reviews.map((review) => new Review(review));
  }
}

export default Review;
