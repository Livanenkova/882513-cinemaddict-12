import FilmPresenter from './FilmPresenter';
import LoadMoreButton from '../view/LoadMoreButtonView.js';
// import NoFilmView from "../view/NoFilmView.js";
import {render, RenderPosition} from '../utils/render.js';

export default class FilmsPresenter {
  constructor(filmsData, cardsContainer) {
    this._isRender = false;
    this._filmsData = filmsData;
    this._cardsContainer = cardsContainer;
    this._films = this._filmsData.map(
        (filmData) => new FilmPresenter(filmData, this._cardsContainer)
    );
    this._LoadMoreButton = new LoadMoreButton();
    this._renderedFilms = 0;
    this._LoadMoreButton.setClickHandler(() => {
      this.render();
    });
    this._sourseFilmsArray = filmsData.slice();
  }

  render() {
    this._cardsContainer.innerHtml = ``;
    const QUANTITY = 5;
    for (let i = 0; i < this._renderedFilms + QUANTITY; i++) {
      this._films[i].renderCard();
    }
    this._renderedFilms += QUANTITY;
    if (this._renderedFilms < this._films.length) {
      this._RenderLoadMoreButton();
    } else {
      this._LoadMoreButton.getElement().remove();
    }
  }

  _RenderLoadMoreButton() {
    const filmsListContainer = document.querySelector(`.films-list__container`);
    render(filmsListContainer, this._LoadMoreButton, RenderPosition.BEFOREEND);
  }

  _clearFilmList() {
    this._cardsContainer.innerHtml = ``;
  }
}
