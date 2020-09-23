import FilmCard from "../view/FilmCardView";
import FilmDetails from "../view/FilmDetailsView";
import {render, RenderPosition} from "../utils/render.js";
import ClosePopupButton from "../view/ClosePopupButtonView.js";

export default class FilmPresenter {
  constructor(filmData, container) {
    this._isOpened = false;
    this._filmData = filmData;
    this._container = container;
    this._popupContainer = document.querySelector(`.main`);
    this._card = new FilmCard(this._filmData);
    this._popup = new FilmDetails(this._filmData);
    this._popupCloseBtn = new ClosePopupButton();
    this._card.setFilmClickHandler(this._cardClickHandler.bind(this));
    document.addEventListener(`keydown`, (e) => {
      if (e.key === `Escape`) {
        this._closePopupHandler();
      }
    });

    this._popupCloseBtn.setClosePopupClickHandler(this._closePopupHandler.bind(this));
  }

  renderCard() {
    render(this._container, this._card.getElement(), RenderPosition.AFTERBEGIN);
  }

  renderPopup() {
    this._isOpened = true;
    render(this._popup.getElement().querySelector(`.film-details__info-wrap`), this._popupCloseBtn.getElement(), RenderPosition.BEFOREEND);
    render(this._popupContainer, this._popup.getElement(), RenderPosition.BEFOREEND);
  }

  _cardClickHandler() {
    this.renderPopup();
  }

  _closePopupHandler() {
    if (this._isOpened) {
      this._isOpened = false;
      this._popup.removeElement();
    }
  }

  // destroy() {
  //   remove(this._card);
  //   remove(this._popup);
  // }
}
