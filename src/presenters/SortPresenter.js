import Sort from "../view/SortView.js";
import {render, RenderPosition} from "../utils/render.js";
import {SortType} from "../const.js";
// import {sortByDate, sortByRating} from "../utils/film.js";

export default class SortPresenter {

  constructor(filmsCard) {
    this._sort = new Sort();
    this._filmsCard = filmsCard;
    this._currentSortType = SortType.DEFAULT;
    // this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._sortFilms = this._sortFilms;
    this._currentSortType = SortType.DEFAULT;
    this._setSortTypeChangeHandler = this._setSortTypeChangeHandler;
    this._handleSortTypeChange = this._handleSortTypeChange;
  }

  renderSort(filmsCard) {
    this._sourcedFilms = filmsCard.slice();
    const siteMainElement = document.querySelector(`.main`);
    render(siteMainElement, this._sort, RenderPosition.AFTERBEGIN);
    this._sort.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _setSortTypeChangeHandler(callback) {
    // this._callback.sortTypeChange = callback;
    // this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
    this._sort.setSortTypeChangeHandler(callback);
  }

}
