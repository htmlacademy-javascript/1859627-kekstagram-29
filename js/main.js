const description = [
  'Пустые шезлонги на пляже',
  'Указатель пляжа',
  'Скалы на фоне моря',
  'Девушка-фотограф на пляже',
  'Оригинальная подача риса',
  'Чёрный спорткар',
  'Поперечный разрез клубники',
  'Компот из клюквы',
  'Самолёт, пролетающий над пляжем',
  'Полка с обувью',
  'Пляж с кустами',
  'Моя новая тачка',
  'Сегодня ем пп еду',
  'Кто понял, тот понял',
  'Купил новые тапки',
  'Лечу на похороны',
  'Сегодня сходила на хор',
  'Американская машина в России',
  'Тапочки для нахождения туалета ночью',
  'Когда пришёл в парикмахерскую и сказал, чтобы немного подровняли',
  'Сегодня снова ем пп еду, спустя 2 года',
  'Последние минуты сегодняшнего солнца',
  'Краб тоже хочет кушать',
  'Концерт рамштайна',
  'На сафари',
]
const commentsMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
const names = [
  'Артем',
  'Тимур',
  'Иван',
  'Софья',
  'Татьяна',
  'Олег',
  'Ольга',
  'Наталья',
]

const similarImagesLength = 25

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)]
}

const generateComment = (i) => {
  return {
    id: i,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: commentsMessages[getRandomInteger(0, commentsMessages.length - 1)],
    name: names[getRandomInteger(0, names.length - 1)],
  }
}

const generateComments = (countComments) => {
  return Array.from({length: countComments}, ( _, index) => generateComment(index))
}

const createImage = (i) => {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrayElement(description),
    likes: getRandomInteger(15, 200),
    comments: generateComments(getRandomInteger(0, 30)),
  };
};

const similarImages = Array.from({length: similarImagesLength}, ( _, index) => createImage(index + 1))

console.log(
  similarImages
);


