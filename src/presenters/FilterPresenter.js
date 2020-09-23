import Filter from "../view/FilterView.js";
import {render, RenderPosition} from "../utils/render.js";

export default class FilterPresenter {

  constructor() {
    this._filter = new Filter();
  }

  renderFilter() {
    const siteMainElement = document.querySelector(`.main`);
    render(siteMainElement, this._filter, RenderPosition.BEFOREEND);
  }

}
