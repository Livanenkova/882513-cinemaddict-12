import getFilms from './mock/filmMock';
// import getComments from './mock/commentMock';
import FilmsPresenter from './presenters/FilmsPresenter';
import SortPresenter from './presenters/SortPresenter.js';
// import FilterPresenter from './presenters/FilterPresenter.js';
import FilmContainerView from './view/FilmContainerView';
import ProfileRatingView from './view/ProfileRatingView.js';
import {render, RenderPosition} from './utils/render';
import {SortType} from "./const.js";
// import {generateFilter} from "./mock/filterMock.js";

// Масив данных (моки)
const filmsData = getFilms(20);

// Хедер
const HeaderLogoElement = document.querySelector(`.header__logo`);
render(HeaderLogoElement, new ProfileRatingView(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);

// Контейнер для фильмов
const filmsContainerView = new FilmContainerView();
const filmsList = new FilmsPresenter(filmsData, filmsContainerView.getElement());
render(siteMainElement, filmsContainerView.getElement(), RenderPosition.AFTERBEGIN);
filmsList.render(filmsData);

// Фильтр
// const filters = generateFilter(filmsData);
// const filter = new FilterPresenter(filters);
// filter.renderFilter();

// Сортировка
const sort = new SortPresenter(filmsData);
sort.renderSort(filmsData);

// Переменная хранящая данные по умолчанию
let currentSortType = SortType.DEFAULT;
// Функция сортировки фильма
export const sortFilms = (data, sortType) => {
  const movieData = data.slice();
  switch (sortType) {
    case SortType.DATE:
      movieData.sort((a, b) => b.filmYear - a.filmYear);
      break;
    case SortType.RATING:
      movieData.sort((a, b) => b.filmRating - a.filmRating);
      break;
  }
  currentSortType = sortType;
  return movieData;
};

// Обработчик смены сортировки
export const handleSortTypeChange = (sortType) => {
  // Проверяет если переменная сортировка равна сортировке по умолчанию,
  // то возвращает данные, если не равна, то запускает функцию sortFilms и передает в нее переменную sortType
  if (currentSortType === sortType) {
    return;
  }
  const films = sortFilms(filmsData, sortType);
  filmsList.render(films);
};

sort._setSortTypeChangeHandler(handleSortTypeChange);
