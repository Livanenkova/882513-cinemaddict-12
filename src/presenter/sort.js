import {getElement, addClass} from "../view/abstract.js";
import SortView from "../view/sort.js";
import {render, RenderPosition} from "../utils/render.js";
import {sortByDate, sortByRating} from "../utils/film.js";
import {SortType} from "../const.js";
import {handleSortTypeChange} from "../main.js";


export default class SortPresenter {

  constructor(filmsCard) {
    this._filmsCard = filmsCard;
    this._sortComponent = new SortView();

    this._currentSortType = SortType.DEFAULT;
  }

  init(filmsCard) {
    this._sourcedFilms = this._filmsCard.slice();
    this._renderSort();
    this._setSortTypeChangeHandler = this._setSortTypeChangeHandler;
    this._handleSortTypeChange = this._handleSortTypeChange;
  }

  _renderSort() {
    const siteMainElement = document.querySelector(`.main`);
    render(siteMainElement, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  // _renderFilmList() {

  // }

  setSortTypeChangeHandler(callback) {
    this._sortComponent._setSortTypeChangeHandler(callback);
  }
}
