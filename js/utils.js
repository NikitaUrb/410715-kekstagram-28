const getRandomNumber = (min, max) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

const getRandomArrayItem = (elem) => elem[getRandomNumber(0, elem.length - 1)];


export {
  getRandomNumber,
  getRandomArrayItem
};
