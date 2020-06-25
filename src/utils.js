const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const typeTextUnfold = (type) => {
  return type !== `room` ? capitalize(type) : `Private room`;
};

const ratingToPercentages = (num) => `${Math.round(num) * 20}%`;

export const getYearMonthDay = (date) => date
  .toISOString().split(`T`)[0];
export const getMonthYear = (date) => date.toGMTString().split(` `).slice(2, 4).join(` `);

export {typeTextUnfold, ratingToPercentages, capitalize};
