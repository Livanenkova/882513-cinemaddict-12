import AbstractView from "./abstract.js";

const createFilterTemplate = (filter) => {

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">${filter[0].name} <span class="main-navigation__item-count">${filter[0].count}</span></a>
        <a href="#history" class="main-navigation__item">${filter[1].name} <span class="main-navigation__item-count">${filter[1].count}</span></a>
        <a href="#favorites" class="main-navigation__item">${filter[2].name} <span class="main-navigation__item-count">${filter[2].count}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Filter extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
