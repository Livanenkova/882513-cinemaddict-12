import ProfileRatingView from "./view/profile-rating.js";
import FilterView from "./view/filter.js";
import FilmContainerView from "./view/film-container.js";
import FilmsListExtraTitleView from "./view/films-list-extra-title.js";
import FilmCardView from "./view/film-card.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generatefilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition} from "./utils/render.js";
import MovieListPresenter from "./presenter/movie-list.js";
import SortPresenter from "./presenter/sort.js";
import {sortByDate, sortByRating} from "./utils/film.js";
import {SortType} from "./const.js";



const EXTRA_FILMS_COUNT = 2;
const EXTRA_FILMS_TITLES = [`Top rated`, `Most commented`];
const DATA_FILM_CARDS_COUNT = 20;

const filmsCard = new Array(DATA_FILM_CARDS_COUNT).fill().map(generatefilm);
const filters = generateFilter(filmsCard);

// Рендер хэдера
const siteHeaderElement = document.querySelector(`.header`);
const siteHeaderLogoElement = siteHeaderElement.querySelector(`.header__logo`);
render(siteHeaderLogoElement, new ProfileRatingView(), RenderPosition.BEFOREEND);
const siteMainElement = document.querySelector(`.main`);

// Рендер фильтра

render(siteMainElement, new FilterView(filters), RenderPosition.BEFOREEND);
// Рендер сортировки
const sort = new SortPresenter(filmsCard);
sort.init(filmsCard);
// Рендер контейнера для карточек фильмов и блоков top rated и most commented
render(siteMainElement, new FilmContainerView(), RenderPosition.BEFOREEND);


const filmsElement = document.querySelector(`.films`);
const filmsList = filmsElement.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);
const FilmsListsExtra = filmsElement.querySelectorAll(`.films-list--extra`);
// Условие отрисовки заглушки или списка карточек

const movieList = new MovieListPresenter(filmsListContainer, filmsCard);
movieList.init();


if (filmsCard.length > 0) {
  FilmsListsExtra.forEach(function (element, i) {

    // рендер отрисовки заголовков top rated и most commented
    render(element, new FilmsListExtraTitleView(EXTRA_FILMS_TITLES[i]), RenderPosition.AFTERBEGIN);

    const elementFilmContainer = element.querySelector(`.films-list__container`);

    for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
      if (filmsCard[i]) {
        // рендер отрисовки карточек фильмов для блоков top rated и most commented
        render(elementFilmContainer, new FilmCardView(filmsCard[i]), RenderPosition.BEFOREEND);
      }
    }
  });
}

// Рендер отрисовки футера
const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, new FooterStatisticsView(), RenderPosition.BEFOREEND);


const currentSortType = SortType.DEFAULT;

const sortFilms = (sortType) => {

// const sortButton = document.querySelector('sort__button--active');
  switch (sortType) {
    case SortType.DATE:
        filmsCard.sort(sortByDate);
        // window.addClass(sortButton, 'sort__button--active');
        console.log(тест)
        break;
      case SortType.RATING:
        filmsCard.sort(sortByRating);
        // window.addClass(sortButton, 'sort__button--active');
        break;
      default:
        filmsCard = filmsCard.slice();
    }

    currentSortType = sortType;
  }

  export const handleSortTypeChange = (sortType) => {
     if (currentSortType === sortType) {
      return;
    }

    sortFilms(sortType);
    movieList.init();
  }

  // const setSortTypeChangeHandler = (handleSortTypeChange) => {

  // };
