import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.APP;

export const getCities = (state) => {
  return state[NAME_SPACE].citiesList;
};

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

export const getCurrentOffer = (state) => {
  return state[NAME_SPACE].currentOffer;
};

export const getHoveredOffer = (state) => {
  return state[NAME_SPACE].hoveredOffer;
};

export const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};
