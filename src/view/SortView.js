import AbstractView from "./abstract.js";
import {SortType} from "../const.js";


const createSortTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
    </ul>`
  );
};

export default class Sort extends AbstractView {

  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  // Обработчик изменения типа сортировки
  _sortTypeChangeHandler(evt) {
    // Принимает в себя данные о клике. Проверяет что если клик произведен не по тегу а,
    // то возвращает значение обратно, если клик произведен по тегу а, то отменяет обычное действие
    // и передает данные датасета функции sortTypeChange
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  // установка обработчик изменения типа сортировки по клику
  setSortTypeChangeHandler(callback) {
    // принимает колбек и присваивает его значение переменной this._callback.sortTypeChange
    this._callback.sortTypeChange = callback;
    // Устанавливает клик на обработчки и по клику запускает функцию _sortTypeChangeHandler
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
