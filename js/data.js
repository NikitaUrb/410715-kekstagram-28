import { getRandomNumber, getRandomArrayItem } from './utils.js';

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DESCRIPTIONS = [
  'Моё фото на море.',
  'Я и мой кот.',
  'Создаем вид бурной деятельности.',
  'Прогулка по парку.',
  'Вид из окна.',
  'Пришло время релакся.',
  'Моё занятие в свободное время. А чем занимаетесь вы?',
  'Во время просмотра любимого сериала.',
  'Моё фото на конкурсе красоты.'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Антон',
  'Артём',
  'Семен',
  'Анна',
  'Ирина',
  'Ольга',
  'Никита',
  'Глеб',
  'Людмила',
  'Иван',
  'Анастасия',
  'Слава',
  'Дарья'
];

const uniqueId = []; // Массив уже существующих ID

const getUniqueId = (min, max) => {
  let currentId = getRandomNumber(min, max);

  if (uniqueId.length >= (max - min + 1)) {
    return null;
  }

  while (uniqueId.includes(currentId)) {
    currentId = getRandomNumber(min, max);
  }

  uniqueId.push(currentId);
  return currentId;
};

const createComment = () => ({
  id: getRandomNumber(0, 1000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayItem(COMMENTS),
  name: getRandomArrayItem(NAMES)
});

const createUserPhoto = () => ({
  id: getUniqueId(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(1, 20)}, createComment)
});

const createUsersPhotos = () => Array.from({length: 25}, createUserPhoto);

export {createUsersPhotos, EFFECTS};
