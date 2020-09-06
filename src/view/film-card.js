import {createElement} from "../utils.js";


const createFilmCardTemplate = (filmsCard) => {
  const {filmName, filmPoster, filmDescription, filmRating, filmYear, filmDuration, filmGenre} = filmsCard;

  return (
    `<article class="film-card">
    <h3 class="film-card__title">${filmName}</h3>
    <p class="film-card__rating">${filmRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${filmYear}</span>
      <span class="film-card__duration">${filmDuration}</span>
      <span class="film-card__genre">${filmGenre}</span>
    </p>
    <img src=${filmPoster} alt="" class="film-card__poster">
    <p class="film-card__description">>${filmDescription}</p>
    <a class="film-card__comments">5 comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`
  );
};

export default class FilmCard {
  constructor(filmsCard) {
    this._filmsCard = filmsCard;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._filmsCard);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
