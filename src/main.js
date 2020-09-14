import ProfileRatingView from "./view/profile-rating.js";
import FilterView from "./view/filter.js";
import SortView from "./view/sort.js";
import FilmContainerView from "./view/film-container.js";
import FilmsListExtraTitleView from "./view/films-list-extra-title.js";
import FilmCardView from "./view/film-card.js";
import FilmDetailsPopupView from "./view/film-details-popup.js";
import ClosePopupButtonView from "./view/close-popup-button.js";
import NoFilmView from "./view/no-film.js";
import LoadFilmsButtonView from "./view/load-more-button.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generatefilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition, replace, remove} from "./utils/render.js";

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
const EXTRA_FILMS_TITLES = [`Top rated`, `Most commented`];
const DATA_FILM_CARDS_COUNT = 20;

const filmsCard = new Array(DATA_FILM_CARDS_COUNT).fill().map(generatefilm);
const filters = generateFilter(filmsCard);

const body = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteHeaderLogoElement = siteHeaderElement.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderLogoElement, new ProfileRatingView(), RenderPosition.BEFOREEND);

render(siteMainElement, new FilterView(filters), RenderPosition.BEFOREEND);
render(siteMainElement, new SortView(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmContainerView(), RenderPosition.BEFOREEND);


const filmsElement = document.querySelector(`.films`);
const filmsList = filmsElement.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);
const FilmsListsExtra = filmsElement.querySelectorAll(`.films-list--extra`);
const FilmContainer = document.querySelector(`.films-list__container`);
const noFilmComponent = new NoFilmView();

const renderFilm = (filmListElement, film) => {
  const filmComponent = new FilmCardView(film);

  const filmPoster = filmComponent.getElement().querySelector(`.film-card__poster`);
  const filmTitle = filmComponent.getElement().querySelector(`.film-card__title`);
  const filmComments = filmComponent.getElement().querySelector(`.film-card__comments`);

  const popupComponent = new FilmDetailsPopupView(film);
  const closePopupButtonComponent = new ClosePopupButtonView(film);
  const filmPopupContainer = popupComponent.getElement().querySelector(`.film-details__info-wrap`);
  const buttonClose = popupComponent.getElement().querySelector(`.film-details__close-btn`);

  render(filmPopupContainer, closePopupButtonComponent, RenderPosition.BEFOREEND);

  const replacePopupToFilm = () => {

    popupComponent.getElement().remove();
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replacePopupToFilm();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  filmComponent.setFilmClickHandler(() => {
    replacePopupToFilm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  closePopupButtonComponent.setClosePopupClickHandler(() => {
    replacePopupToFilm();
  });

  const onMouseDownShowPopup = () => {
    body.appendChild(popupComponent.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  filmPoster.addEventListener(`mousedown`, onMouseDownShowPopup);
  filmTitle.addEventListener(`mousedown`, onMouseDownShowPopup);
  filmComments.addEventListener(`mousedown`, onMouseDownShowPopup);
  render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
};


if (filmsCard.length === 0) {

  render(FilmContainer, noFilmComponent, RenderPosition.BEFOREEND);

} else {

  for (let i = 0; i < FILM_CARDS_COUNT; i++) {

    renderFilm(filmsListContainer, filmsCard[i]);
  }
}

if (filmsCard.length > FILM_CARDS_COUNT) {

  let renderedFilmCount = FILM_CARDS_COUNT;

  const loadFilmsButtonComponent = new LoadFilmsButtonView();

  render(filmsList, loadFilmsButtonComponent, RenderPosition.BEFOREEND);

  const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

  loadFilmsButtonComponent.setClickHandler(() => {
    filmsCard
    .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT)
    .forEach((filmsCard) => render(filmsListContainer, new FilmCardView(filmsCard), RenderPosition.BEFOREEND));
    renderedFilmCount += FILM_CARDS_COUNT;

    if (renderedFilmCount >= filmsCard.length) {
      loadFilmsButtonComponent.getElement().remove();
      loadFilmsButtonComponent.removeElement();
    }
  });
}

if (filmsCard.length > 0) {
  FilmsListsExtra.forEach(function (element, i) {

    render(element, new FilmsListExtraTitleView(EXTRA_FILMS_TITLES[i]), RenderPosition.AFTERBEGIN);

    const elementFilmContainer = element.querySelector(`.films-list__container`);

    for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
      if (filmsCard[i]) {
        render(elementFilmContainer, new FilmCardView(filmsCard[i]), RenderPosition.BEFOREEND);
      }
    }
  });
}

const siteFooterElement = document.querySelector(`.footer`);

render(siteFooterElement, new FooterStatisticsView(), RenderPosition.BEFOREEND);
