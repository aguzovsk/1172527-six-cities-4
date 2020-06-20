const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const typeTextUnfold = (type) => {
  return type !== `room` ? capitalize(type) : `Private Room`;
};

const ratingToPercentages = (num) => `${Math.round(num) * 20}%`;

export {typeTextUnfold, ratingToPercentages};
