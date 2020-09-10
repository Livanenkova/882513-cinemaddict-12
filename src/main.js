import ProfileRatingView from "./view/profile-rating.js";
import FilterView from "./view/filter.js";
import SortView from "./view/sort.js";
import FilmContainerView from "./view/film-container.js";
import FilmsListExtraTitleView from "./view/films-list-extra-title.js";
import FilmCardView from "./view/film-card.js";
import FilmDetailsPopupView from "./view/film-details-popup.js";
import NoFilmView from "./view/no-film.js";
import LoadFilmsButtonView from "./view/load-more-button.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generatefilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition} from "./utils.js";

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
const EXTRA_FILMS_TITLES = [`Top rated`, `Most commented`];
const DATA_FILM_CARDS_COUNT = 0;

const filmsCard = new Array(DATA_FILM_CARDS_COUNT).fill().map(generatefilm);
const filters = generateFilter(filmsCard);

const body = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteHeaderLogoElement = siteHeaderElement.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderLogoElement, new ProfileRatingView().getElement(), RenderPosition.BEFOREEND);

render(siteMainElement, new FilterView(filters).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmContainerView().getElement(), RenderPosition.BEFOREEND);


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
  const buttonClose = popupComponent.getElement().querySelector(`.film-details__close-btn`);

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

  filmComponent.getElement().addEventListener(`click`, () => {
    replacePopupToFilm();
  });

  document.addEventListener(`keydown`, onEscKeyDown);

  buttonClose.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    replacePopupToFilm();
  });

  const onMouseDownShowPopup = () => {
    body.appendChild(popupComponent.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  filmPoster.addEventListener(`mousedown`, onMouseDownShowPopup);
  filmTitle.addEventListener(`mousedown`, onMouseDownShowPopup);
  filmComments.addEventListener(`mousedown`, onMouseDownShowPopup);
  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
}
  console.log(filmsCard)
if (filmsCard.length === 0) {

  render(FilmContainer, noFilmComponent.getElement(), RenderPosition.BEFOREEND);

} else {

  for (let i = 0; i < FILM_CARDS_COUNT; i++) {

    renderFilm(filmsListContainer, filmsCard[i]);
  }
}

if (filmsCard.length > FILM_CARDS_COUNT) {

  let renderedFilmCount = FILM_CARDS_COUNT;

  render(filmsList, new LoadFilmsButtonView().getElement(), RenderPosition.BEFOREEND);

  const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmsCard
    .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT)
    .forEach((filmsCard) => render(filmsListContainer, new FilmCardView(filmsCard).getElement(), RenderPosition.BEFOREEND));
    renderedFilmCount += FILM_CARDS_COUNT;

    if (renderedFilmCount >= filmsCard.length) {
      loadMoreButton.getElement().remove();
      loadMoreButton.removeElement();
    }
  });
}

if (filmsCard.length > 0) {
FilmsListsExtra.forEach(function (element, i) {

  render(element, new FilmsListExtraTitleView(EXTRA_FILMS_TITLES[i]).getElement(), RenderPosition.AFTERBEGIN);

  const elementFilmContainer = element.querySelector(`.films-list__container`);

  for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
    if (filmsCard[i]) {
      render(elementFilmContainer, new FilmCardView(filmsCard[i]).getElement(), RenderPosition.BEFOREEND);
    }
  }
});
};

const siteFooterElement = document.querySelector(`.footer`);

render(siteFooterElement, new FooterStatisticsView().getElement(), RenderPosition.BEFOREEND);
