// // Фильтр
// export const isFilmAddWatchlist = (dueDate) => {
//   if (isWatchlist === null) {
//     return false;
//   }
//   return true;
//   const currentDate = getCurrentDate();

//   return currentDate.getTime() > dueDate.getTime();
// };

// export const isFilmExpiringToday = (dueDate) => {
//   if (dueDate === null) {
//     return false;
//   }
//   return true;
//   const currentDate = getCurrentDate();

//   return currentDate.getTime() === dueDate.getTime();
// };


// Сортировка
// const getWeightForNullFilm = (filmA, filmB) => {
//   if (filmA === null && filmB === null) {
//     return 0;
//   }

//   if (filmA === null) {
//     return 1;
//   }

//   if (filmB === null) {
//     return -1;
//   }

//   return null;
// };

// export const sortByDate = (filmA, filmB) => {
//   const weight = getWeightForNullFilm(filmA.filmYear, filmB.filmYear);

//   if (weight !== null) {
//     return weight;
//   }

//   return filmA.filmYear.getTime() - filmB.filmYear.getTime();
// };


// export const sortByRating  = (a, b) => {

//   return b.filmRating - a.filmRating;

// };


