import {createElement} from "../utils.js";

export const createFilmsListExtraTitleTemplate = (title) => {
  return (
    `<h2 class="films-list__title">${title}</h2>`
  );
};

export default class FilmsListExtraTitle {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListExtraTitleTemplate();
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
