// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
import {getRandomInteger} from "../utils/common.js";

const generateFilmName = () => {
  const films = [
    `Славные парни`,
    `Криминальное чтиво`,
    `Не грози южному централу`
  ];

  const randomIndex = getRandomInteger(0, films.length - 1);
  return films[randomIndex];
};

const generateFilmPoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];
  const randomIndex = getRandomInteger(0, posters.length - 1);
  return `images/posters/` + posters[randomIndex];
};


const generateFilmDescription = () => {

  const descriptions =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
    Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis
    sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue
    convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus
    sit amet tempus.`
  ;

  const description = descriptions.split(`. `);
  const randomIndex = getRandomInteger(0, description.length - 1);
  const descriptionContainer = [];

  for (let i = 0; i <= randomIndex; i++) {
    descriptionContainer.push(description[getRandomInteger(0, description.length - 1)]);

  }

  const renderComment = descriptionContainer.join(`.`);

  return renderComment;
};

const generateFilmRating = () => {
  const randomIndex = getRandomInteger(0, 9);
  return (Math.random() + randomIndex).toFixed(1);
};


const generateFilmYear = () => {

  const year = [
    `1929`,
    `1933`,
    `1955`,
    `1964`,
    `1936`,
  ];

  const randomIndex = getRandomInteger(0, year.length - 1);
  return year[randomIndex];

};

const generateFilmDuration = () => {

  const time = [
    `1h 55m`,
    `54m`,
    `1h 59m`,
    `1h 21m`,
    `16m`,
  ];

  const randomIndex = getRandomInteger(0, time.length - 1);
  return time[randomIndex];
};

const generateFilmGenre = () => {

  const genre = [
    `Drama`,
    `Mystery`,
    `Comedy`,
  ];

  const randomIndex = getRandomInteger(0, genre.length - 1);
  return genre[randomIndex];
};

const generatefilm = () => {

  return {
    filmName: generateFilmName(),
    filmPoster: generateFilmPoster(),
    filmDescription: generateFilmDescription(),
    commentsCount: getRandomInteger(0, 6),
    filmRating: generateFilmRating(),
    filmYear: generateFilmYear(),
    filmDuration: generateFilmDuration(),
    filmGenre: generateFilmGenre(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isHistory: Boolean(getRandomInteger(0, 1)),
    isFavorites: Boolean(getRandomInteger(0, 1)),
  };
};


export default (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generatefilm());
  }
  return result;
};
