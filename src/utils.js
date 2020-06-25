const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const typeTextUnfold = (type) => {
  return type !== `room` ? capitalize(type) : `Private Room`;
};

const ratingToPercentages = (num) => `${Math.round(num) * 20}%`;

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

export const getYearMonthDay = (date) => date
  .toISOString().split(`T`)[0];
export const getMonthYear = (date) => date.toGMTString().split(` `).slice(2, 4).join(` `);
// export const getMonthDay = (date) => date
//   .toDateString().split(` `)
//   .slice(1, 3).join(` `);
// export const getHourMinute = (date) => {
//   const hours = formatDecimal(date.getHours());
//   const minutes = formatDecimal(date.getMinutes());
//   return `${hours}:${minutes}`;
// };

export {typeTextUnfold, ratingToPercentages, capitalize};
