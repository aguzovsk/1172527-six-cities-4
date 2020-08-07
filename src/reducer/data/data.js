import {extend} from '../../utils';
import Offer from '../../models/offer';
import Review from '../../models/review';

const initialState = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  favorites: new Set(),
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review
  }),
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
  addFavorite: (offer) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: offer
  }),
  removeFavorite: (offer) => ({
    type: ActionType.REMOVE_FROM_FAVORITES,
    payload: offer
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: [...state.reviews, action.payload]
      });

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: new Set(action.payload)
      });

    case ActionType.ADD_TO_FAVORITES:
      const favoritesAdded = new Set(state.favorites);
      favorites.add(action.payload);

      return extend(state, {
        favorites: favoritesAdded
      });

    case ActionType.REMOVE_FROM_FAVORITES:
      const favoritesRemoved = new Set(state.favorites);
      favorites.delete(action.payload);

      return extend(state, {
        favorites: favoritesRemoved
      });

    default:
      return state;
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const offers = Offer.parseOffersArray(response.data)
      dispatch(ActionCreator.loadOffers(offers));
    }).catch((err) => {
      console.log(err);
      throw err;
    });
  },
  loadReviews: (offer) => (dispatch, getState, api) => {
    return api.get(`/comments/${offer.id}`).then((response) => {
      const reviews = Review.parseReviewsArray(response.data);
      dispatch(ActionCreator.loadReviews(reviews));
    });
  },
  addReview: (review, offer) => (dispatch, getState, api) => {
    return api.post(`/comments/${offer.id}`, review.toRaw()).then((response) => {
      const reviews = Review.parseReviewsArray(response.data);
      dispatch(ActionCreator.loadReviews(reviews));
    });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`).then((response) => {
      const offers = Offer.parseOffersArray(response.data);
      dispatch(ActionCreator.loadNearbyOffers(offers));
    });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`).then((response) => {
      const offers = Offer.parseOffersArray(response.data);
      dispatch(ActionCreator.loadFavorites(offers));
    });
  },
  addFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/1`).then((response) => {
      dispatch(ActionCreator.addFavorite(response.data));
    });
  },
  removeFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/0`).then((response) => {
      dispatch(ActionCreator.removeFavorite(response.data));
    });
  }
};

export {reducer, Operation, ActionType, ActionCreator};
