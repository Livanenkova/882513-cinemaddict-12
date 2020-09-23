import {getRandomInteger} from "../utils/common.js";

const generateFilmComment = () => {
  const commentStructure = [
    {avatar: `angry`, text: `Lorem ipsum dolor.`, name: `Велимир Хлебников`, date: `2019/12/31 23:59`},
    {avatar: `puke`, text: `Lorem.`, name: `Алескей Крученых`, date: `2019/12/31 23:59`},
    {avatar: `sleeping`, text: `Lorem ipsum`, name: `Жан-Поль Петросян`, date: `2019/12/31 23:59`},
    {avatar: `smile`, text: `Lorem.`, name: `Мистер Проппер`, date: `2019/12/31 23:59`}
  ];

  const randomIndex = getRandomInteger(0, 3);

  const dataComment = [];
  for (let i = 0; i <= randomIndex; i++) {
    dataComment.push(
        {avatar: `./images/emoji/` + commentStructure[randomIndex].avatar + `.png`,
          text: commentStructure[randomIndex].text,
          name: commentStructure[randomIndex].name,
          date: commentStructure[randomIndex].date,
        });
  }
  return dataComment;
};


export default (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateFilmComment());
  }
  return result;
};
