import AbstractView from "./abstract.js";

const createFilmContainerTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container"></div>
        </section>
      <section class="films-list--extra">
        <div class="films-list__container"></div>
      </section>
      <section class="films-list--extra">
        <div class="films-list__container"></div>
      </section>
    </section>`
  );
};


export default class FilmContainer extends AbstractView {
  getTemplate() {

    return createFilmContainerTemplate();
  }
}
