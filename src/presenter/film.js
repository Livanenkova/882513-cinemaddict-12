import FilmCardView from "../view/film-card.js";
import FilmDetailsPopupView from "../view/film-details-popup.js";
import ClosePopupButtonView from "../view/close-popup-button.js";

import {render, RenderPosition} from "../utils/render.js";

export default class FilmPresenter {

  constructor(filmContainer, films) {

    this._filmContainer = filmContainer;
    this._films = films;

    this._filmCardComponent = new FilmCardView();
    this._filmDetailsPopupComponent = new FilmDetailsPopupView(films);
    this._closePopupButtonComponent = new ClosePopupButtonView(films);
    this._filmComponent = new FilmCardView(films);
    this._closePopupButtonComponent = new ClosePopupButtonView(films);
  }

  init() {

    this._renderFilmCard(this._filmContainer, this._films);
  }

  _renderFilmCard(filmListElement, film) {

    render(filmListElement, this._filmComponent, RenderPosition.BEFOREEND);

    const body = document.querySelector(`body`);
    const filmPoster = this._filmComponent.getElement().querySelector(`.film-card__poster`);
    const filmTitle = this._filmComponent.getElement().querySelector(`.film-card__title`);
    const filmComments = this._filmComponent.getElement().querySelector(`.film-card__comments`);

    // рендер кнопки закрытия попапа
    // const popupComponent = new FilmDetailsPopupView(film);

    const filmPopupContainer = this._filmDetailsPopupComponent.getElement().querySelector(`.film-details__info-wrap`);
    // const buttonClose = popupComponent.getElement().querySelector(`.film-details__close-btn`);
    render(filmPopupContainer, this._closePopupButtonComponent, RenderPosition.BEFOREEND);

    const replacePopupToFilm = () => {
      this._filmDetailsPopupComponent.getElement().remove();
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replacePopupToFilm();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this._filmComponent.setFilmClickHandler(() => {
      replacePopupToFilm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    this._closePopupButtonComponent.setClosePopupClickHandler(() => {
      replacePopupToFilm();
    });

    const onMouseDownShowPopup = () => {
      body.appendChild(this._filmDetailsPopupComponent.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    };

    filmPoster.addEventListener(`mousedown`, onMouseDownShowPopup);
    filmTitle.addEventListener(`mousedown`, onMouseDownShowPopup);
    filmComments.addEventListener(`mousedown`, onMouseDownShowPopup);
  }


  // _renderFilmDetailsPopup() {


  // }

  // _renderClosePopupButton() {

  // }


}
