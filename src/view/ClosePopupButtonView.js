import AbstractView from "./abstract.js";


const createClosePopupButton = () => {
  return (
    `<div class="film-details__close">
    <button class="film-details__close-btn" type="button">close</button>
    </div>`
  );
};

export default class ClosePopupButton extends AbstractView {
  constructor() {
    super();

    this._closePopupClickHandler = this._closePopupClickHandler.bind(this);
  }

  getTemplate() {
    return createClosePopupButton();
  }

  _closePopupClickHandler(evt) {
    evt.preventDefault();

    this._callback.click();
  }

  setClosePopupClickHandler(callback) {

    this._callback.click = callback;

    this.getElement().addEventListener(`click`, this._closePopupClickHandler);
  }
}
