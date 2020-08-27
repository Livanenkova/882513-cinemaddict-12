import {createProfileRatingTemplate} from "./view/profile-rating.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmContainerTemplate} from "./view/film-container.js";
import {createFilmsListExtraTitle} from "./view/films-list-extra-title.js";
import {createSiteFilmCard} from "./view/film-card.js";
import {createFilmDetailsPopup} from "./view/film-details-popup.js";
import {createFilmDetailsDescription} from "./view/film-details-description.js";
import {createFilmDetailsComments} from "./view/film-details-comments.js";
import {createLoadFilmsButton} from "./view/load-more-button.js";
import {createSiteFooterStatistics} from "./view/footer-statistics.js";
import {generatefilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
const EXTRA_FILMS_TITLES = [`Top rated`, `Most commented`];
const DATA_FILM_CARDS_COUNT = 20;

const filmsCard = new Array(DATA_FILM_CARDS_COUNT).fill().map(generatefilm);
const filters = generateFilter(filmsCard);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteHeaderLogoElement = siteHeaderElement.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderLogoElement, createProfileRatingTemplate(), `afterend`);


render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmContainerTemplate(), `beforeend`);

const filmsElement = document.querySelector(`.films`);
const filmsList = filmsElement.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);
const FilmsListsExtra = filmsElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < FILM_CARDS_COUNT; i++) {

  render(filmsListContainer, createSiteFilmCard(filmsCard[i]), `beforeend`);

}

render(filmsList, createLoadFilmsButton(), `beforeend`);

FilmsListsExtra.forEach(function (element, i) {

  render(element, createFilmsListExtraTitle(EXTRA_FILMS_TITLES[i]), `afterbegin`);

  const elementFilmContainer = element.querySelector(`.films-list__container`);

  for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
    render(elementFilmContainer, createSiteFilmCard(filmsCard[i]), `beforeend`);
  }
});

const siteFooterElement = document.querySelector(`.footer`);

render(siteFooterElement, createSiteFooterStatistics(), `beforeend`);

render(siteFooterElement, createFilmDetailsPopup(), `afterend`);

const filmDetailsTopContainer = document.querySelector(`.form-details__top-container`);

const filmDetailsBottomContainer = document.querySelector(`.form-details__bottom-container`);

render(filmDetailsTopContainer, createFilmDetailsDescription(filmsCard[0]), `beforeend`);

render(filmDetailsBottomContainer, createFilmDetailsComments(filmsCard[0]), `beforeend`);

