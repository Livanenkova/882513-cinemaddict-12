import AbstractView from "./abstract.js";

const createLoadFilmsButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class LoadMoreButton extends AbstractView {
  constructor() {
    super();

    // 4. Теперь обработчик - метод класса, а не стрелочная функция.
    // Поэтому при передаче в addEventListener он теряет контекст (this),
    // а с контекстом - доступ к свойствам и методам.
    // Чтобы такого не происходило, нужно насильно
    // привязать обработчик к контексту с помощью bind
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createLoadFilmsButton();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    // 3. А внутри абстрактного обработчика вызовем колбэк
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
