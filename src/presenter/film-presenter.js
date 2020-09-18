import FilmCardView from "../view/film-card.js";
import FilmDetailsPopupView from "../view/film-details-popup.js";
import ClosePopupButtonView from "../view/close-popup-button.js";

import {render, RenderPosition} from "../utils/render.js";

export default class FilmPresenter {

  constructor(filmContainer, films) {

    this._filmContainer = filmContainer;
    this._films = films;

    this._filmCardComponent = new FilmCardView();
    this._filmDetailsPopupComponent = new FilmDetailsPopupView();
    this._closePopupButtonView = new ClosePopupButtonView();
  }

  init() {

    this._renderFilmCard(this._filmContainer, this._films);
  }

  _renderFilmCard(filmListElement, film) {
    const filmComponent = new FilmCardView(film);
    render(filmListElement, filmComponent, RenderPosition.BEFOREEND);

    const body = document.querySelector(`body`);
    const filmPoster = filmComponent.getElement().querySelector(`.film-card__poster`);
    const filmTitle = filmComponent.getElement().querySelector(`.film-card__title`);
    const filmComments = filmComponent.getElement().querySelector(`.film-card__comments`);

    // рендер кнопки закрытия попапа
    const popupComponent = new FilmDetailsPopupView(film);
    const closePopupButtonComponent = new ClosePopupButtonView(film);
    const filmPopupContainer = popupComponent.getElement().querySelector(`.film-details__info-wrap`);
    // const buttonClose = popupComponent.getElement().querySelector(`.film-details__close-btn`);
    render(filmPopupContainer, closePopupButtonComponent, RenderPosition.BEFOREEND);

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

    filmComponent.setFilmClickHandler(() => {
      replacePopupToFilm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    closePopupButtonComponent.setClosePopupClickHandler(() => {
      replacePopupToFilm();
    });

    const onMouseDownShowPopup = () => {
      body.appendChild(popupComponent.getElement());
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
