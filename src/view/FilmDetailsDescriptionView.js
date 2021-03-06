export const createFilmDetailsDescription = (filmsCard) => {
  const {filmName, filmPoster, filmRating, filmYear, filmDuration, filmGenre} = filmsCard;

  return (
    `<div class="film-details__info-wrap">
    <div class="film-details__poster">
      <img class="film-details__poster-img" src=${filmPoster} alt="">
      <p class="film-details__age">18+</p>
    </div>
    <div class="film-details__info">
      <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${filmName}</h3>
          <p class="film-details__title-original">Original: ${filmName}</p>
        </div>
        <div class="film-details__rating">
          <p class="film-details__total-rating">${filmRating}</p>
        </div>
      </div>
      <table class="film-details__table">
        <tr class="film-details__row">
          <td class="film-details__term">Director</td>
          <td class="film-details__cell">Anthony Mann</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Writers</td>
          <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Actors</td>
          <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Release Date</td>
          <td class="film-details__cell">${filmYear}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Runtime</td>
          <td class="film-details__cell">${filmDuration}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Country</td>
          <td class="film-details__cell">USA</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Genres</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${filmGenre}</span>
            <span class="film-details__genre">${filmGenre}</span>
            <span class="film-details__genre">${filmGenre}</span></td>
        </tr>
      </table>
      <p class="film-details__film-description">
        The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
      </p>
      </div>
    </div>
  <section class="film-details__controls">
    <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
    <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
    <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
    <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
    <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
    <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
  </section>`
  );
};
