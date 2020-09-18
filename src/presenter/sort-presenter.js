import SortView from "../view/sort.js";
import {render, RenderPosition} from "../utils/render.js";

export default class SortPresenter {

  constructor() {

    this._SortContainer = new SortView();
  }

  init() {

    this._renderSort();
  }

  _renderSort() {
   const siteMainElement = document.querySelector(`.main`);
   render(siteMainElement, this._SortContainer, RenderPosition.BEFOREEND);
  }

}
