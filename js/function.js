const isStringLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  const line = string
    .toLowerCase()
    .replace(/[.,-\s]/g, '');

  return line === line.split('').reverse().join('');
};

const getNumber = (string) => {
  const result = string
    .toString()
    .replace(/[^\d]/gi, '');

  return parseInt(result, 10);
};

const getString = (string, length, addSimbol) => {
  const actualLenght = length - string.length;

  if (actualLenght <= 0) {
    return string;
  }

  return addSimbol.slice(0, actualLenght % addSimbol.length) + addSimbol.repeat(actualLenght / addSimbol.length) + string;
};


export default {
  isStringLength,
  isPalindrome,
  getNumber,
  getString
};
