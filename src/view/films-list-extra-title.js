import AbstractView from "./abstract.js";

export const createFilmsListExtraTitleTemplate = (title) => {
  return (
    `<h2 class="films-list__title">${title}</h2>`
  );
};

export default class FilmsListExtraTitle extends AbstractView {
  constructor(title) {
    super();
    this._title = title;
  }

  getTemplate() {
    return createFilmsListExtraTitleTemplate(this._title);
  }
}
