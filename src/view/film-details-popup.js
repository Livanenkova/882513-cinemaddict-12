import {createElement} from "../utils.js";
import {createFilmDetailsDescription} from "../view/film-details-description.js";
import {createFilmDetailsComments} from "../view/film-details-comments.js";

const createFilmDetailsPopupTemplate = (film) => {
  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
        ${createFilmDetailsDescription(film)}
        </div>
        <div class="form-details__bottom-container">
        ${createFilmDetailsComments(film)}
        </div>

      </form>
    </section>`
  );
};

export default class FilmDetailsPopup {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createFilmDetailsPopupTemplate(this._film);
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
