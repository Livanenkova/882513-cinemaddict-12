import FilmPresenter from "./film-presenter.js";
import FilmContainerView from "../view/film-container.js";
import LoadFilmsButtonView from "../view/load-more-button.js";
import NoFilmView from "../view/no-film.js";
import FilmCardView from "../view/film-card.js";
import {render, RenderPosition} from "../utils/render.js";

export default class MovieListPresenter {

  constructor(filmContainer, films) {

    this._filmContainer = filmContainer;
    this._films = films;

    this._FilmContainerComponent = new FilmContainerView();
    this._LoadFilmsButtonComponent = new LoadFilmsButtonView();
    this._NoFilmView = new NoFilmView();
  }

  init() {
    // this._boardFilms = boardFilms.slice();
    this._renderFilmContainer(this._filmContainer, this._films);
    this._renderMovieList(this._filmContainer, this._films);
    this._renderLoadFilmsButton(this._filmContainer, this._films);
  }

  _renderFilmContainer() {

    render(this._FilmContainerComponent, this._films, RenderPosition.BEFOREEND);
  }


  _renderMovieList(filmContainer, films) {

    const FILM_CARDS_COUNT = 5;

    if (films.length === 0) {
      render(this._filmContainer, this._NoFilmView, RenderPosition.BEFOREEND);
    } else {

      for (let i = 0; i < FILM_CARDS_COUNT; i++) {
        const someFilm = new FilmPresenter(filmContainer, films[i]);
        someFilm.init();
      }
    }
  }

  _renderLoadFilmsButton(filmListElement, filmsCard) {
    const FILM_CARDS_COUNT = 5;
    const filmsElement = document.querySelector(`.films`);
    const filmsList = filmsElement.querySelector(`.films-list`);
    const filmsListContainer = filmsList.querySelector(`.films-list__container`);

    if (filmsCard.length > FILM_CARDS_COUNT) {
      let renderedFilmCount = FILM_CARDS_COUNT;
      const loadFilmsButtonComponent = new LoadFilmsButtonView();
      render(filmsList, loadFilmsButtonComponent, RenderPosition.BEFOREEND);
      // const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

      loadFilmsButtonComponent.setClickHandler(() => {
        filmsCard
      .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT)
      .forEach(() => render(filmsListContainer, new FilmCardView(filmsCard), RenderPosition.BEFOREEND));
        renderedFilmCount += FILM_CARDS_COUNT;

        if (renderedFilmCount >= filmsCard.length) {
          loadFilmsButtonComponent.getElement().remove();
          loadFilmsButtonComponent.removeElement();
        }
      });
    }
  }
}


