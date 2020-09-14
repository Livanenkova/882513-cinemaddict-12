import FilmContainerView from "./view/film-container.js";
import FilmCardView from "./view/film-card.js";
import FilmsListExtraTitleView from "./view/films-list-extra-title.js";
import NoFilmView from "./view/no-film.js";
import LoadFilmsButtonView from "./view/load-more-button.js";
import {render, RenderPosition } from "./utils/render.js";

const DATA_FILM_CARDS_COUNT = 20;

export default class FilmBoard {
  constructor(filmBoardContainer) {

    this._filmBoardContainer = filmBoardContainer;

    this._filmContainerComponent = new FilmContainerView();
    this._filmCardComponent = new FilmCardView();
    this.filmsListExtraTitleComponent = new FilmsListExtraTitleView();
    this._noFilmComponent = new NoFilmView();
    this._loadFilmsButtonComponent = new LoadFilmsButtonView();
  }

  init(boardFilms) {
    this._boardTasks = boardTasks.slice();
    // Метод для инициализации (начала работы) модуля,
    // малая часть текущей функции renderBoard в main.js
  }



  _renderFilmCard(from, to) {

  }

  _renderFilmsListExtraTitle() {

  }

  _renderNoFilm() {

  }

  _renderLoadMoreButton() {

  }

  _renderFilmContainer() {

  }
}
