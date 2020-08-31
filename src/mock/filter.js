import {isTaskExpired, isTaskExpiringToday} from "../utils.js";

const taskToFilterMap = {
  all: (filmsCard) => filmsCard.filter((card) => !card).length,
  watchlist: (filmsCard) => filmsCard
    .filter((card) => !card.isWatchlist)
    .filter((card) => isTaskExpired(card.numberFilm)).length,
  history: (filmsCard) => filmsCard
    .filter((card) => !card.isHistory)
    .filter((card) => isTaskExpiringToday(card.numberFilm)).length,
  favorites: (filmsCard) => filmsCard
    .filter((card) => !card.isFavorites)
    .filter((card) => card.isFavorite).length,
};

export const generateFilter = (filmsCard) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(filmsCard),
    };
  });
};
