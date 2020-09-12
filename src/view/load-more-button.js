import AbstractView from "./abstract.js";

const createLoadFilmsButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class LoadMoreButton extends AbstractView {

  getTemplate() {
    return createLoadFilmsButton();
  }
}
