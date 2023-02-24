const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  const line = string
    .toLowerCase()
    .replace(/[.,-\s]/g, '');

  return line === line.split('').reverse().join('');
};

isPalindrome('Лёша на полке клопа нашёл ');

const parseNumber = (string) => {
  const result = string
    .toString()
    .replace(/[^\d]/gi, '');

  return parseInt(result, 10);
};

parseNumber('1 кефир, 0.5 батона');

const changeString = (string, length, addSymbols) => {
  const actualLength = length - string.length;

  if (actualLength <= 0) {
    return string;
  }

  return addSymbols.slice(0, actualLength % addSymbols.length) + addSymbols.repeat(actualLength / addSymbols.length) + string;
};

changeString('q', 4, 'we');
