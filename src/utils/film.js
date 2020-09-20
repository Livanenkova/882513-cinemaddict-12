import getElement from "../view/abstract.js";

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

export const isFilmExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }
  return true;
  const currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

export const isFilmExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }
  return true;
  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};

// Функция помещает задачи без даты в конце списка,
// возвращая нужный вес для колбэка sort
const getWeightForNullDate = (filmA, filmB) => {
  if (filmA === null && filmB === null) {
    return 0;
  }

  if (filmA === null) {
    return 1;
  }

  if (filmB === null) {
    return -1;
  }

  return null;
};

export const sortByDate = (filmA, filmB) => {
  const weight = getWeightForNullDate(filmA.filmYear, filmB.filmYear);

  if (weight !== null) {
    return weight;
  }

  return filmA.filmYear.getTime() - filmB.filmYear.getTime();
};


export const sortByRating = (a, b) => {
  b.filmRating - a.filmRating;
};
