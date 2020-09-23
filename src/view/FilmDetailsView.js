import AbstractView from "./abstract.js";
import {createFilmDetailsDescription} from "./FilmDetailsDescriptionView.js";
import {createFilmDetailsComments} from "./FilmDetailsCommentsView.js";

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

export default class FilmDetails extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createFilmDetailsPopupTemplate(this._film);
  }

}
