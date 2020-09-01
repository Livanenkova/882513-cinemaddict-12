import ProfileRatingView from "./view/profile-rating.js";
import FilterView from "./view/filter.js";
import SortView from "./view/sort.js";
import FilmContainerView from "./view/film-container.js";
import FilmsListExtraTitleView from "./view/films-list-extra-title.js";
import SiteFilmCardView from "./view/film-card.js";
import {createFilmDetailsPopup} from "./view/film-details-popup.js";
import {createFilmDetailsDescription} from "./view/film-details-description.js";
import {createFilmDetailsComments} from "./view/film-details-comments.js";
import LoadFilmsButtonView from "./view/load-more-button.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generatefilm} from "./mock/film.js";
import {generateFilter} from "./mock/filter.js";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
const EXTRA_FILMS_TITLES = [`Top rated`, `Most commented`];
const DATA_FILM_CARDS_COUNT = 20;

const filmsCard = new Array(DATA_FILM_CARDS_COUNT).fill().map(generatefilm);
const filters = generateFilter(filmsCard);

const siteHeaderElement = document.querySelector(`.header`);
const siteHeaderLogoElement = siteHeaderElement.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

renderElement(siteHeaderLogoElement, new ProfileRatingView().getElement(), RenderPosition.BEFOREEND);

renderElement(siteMainElement, new FilterView (filters).getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilmContainerView().getElement(), RenderPosition.BEFOREEND);

const filmsElement = document.querySelector(`.films`);
const filmsList = filmsElement.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);
const FilmsListsExtra = filmsElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < Math.min(filmsCard.length, FILM_CARDS_COUNT); i++) {

  renderTemplate(filmsListContainer, new SiteFilmCardView(filmsCard[i]).getElement(), RenderPosition.BEFOREEND);

}


if (filmsCard.length > FILM_CARDS_COUNT) {

  let renderedFilmCount = FILM_CARDS_COUNT;

  renderElement(filmsList, new LoadFilmsButtonView().getElement(), RenderPosition.BEFOREEND);

  const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmsCard
    .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT)
    .forEach((filmsCard) => renderElement(filmsList, new SiteFilmCardView(filmsCard).getElement(), RenderPosition.BEFOREEND);
    renderedFilmCount += FILM_CARDS_COUNT;

    if (renderedFilmCount >= filmsCard.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}


FilmsListsExtra.forEach(function (element, i) {

  renderElement(element, new FilmsListExtraTitleView(EXTRA_FILMS_TITLES[i]).getElement(), RenderPosition.AFTERBEGIN);

  const elementFilmContainer = element.querySelector(`.films-list__container`);

  for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
    renderTemplate(elementFilmContainer, createSiteFilmCard(filmsCard[i]), `beforeend`);
  }
});

const siteFooterElement = document.querySelector(`.footer`);

renderElement(siteFooterElement, new FooterStatisticsView().getElement(), RenderPosition.BEFOREEND);

// renderTemplate(siteFooterElement, createFilmDetailsPopup(), `afterend`);

// const filmDetailsTopContainer = document.querySelector(`.form-details__top-container`);

// const filmDetailsBottomContainer = document.querySelector(`.form-details__bottom-container`);

// renderTemplate(filmDetailsTopContainer, createFilmDetailsDescription(filmsCard[0]), `beforeend`);

// renderTemplate(filmDetailsBottomContainer, createFilmDetailsComments(filmsCard[0]), `beforeend`);

