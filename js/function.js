const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const line = string
    .toLowerCase()
    .replace(/[.,-\s]/g, '');

  return line === line.split('').reverse().join('');
};

const parseNumber = (string) => {
  const result = string
    .toString()
    .replace(/[^\d]/gi, '');

  return parseInt(result, 10);
};

const changeString = (string, length, addSymbols) => {
  const actualLength = length - string.length;

  if (actualLength <= 0) {
    return string;
  }

  return addSymbols.slice(0, actualLength % addSymbols.length) + addSymbols.repeat(actualLength / addSymbols.length) + string;
};

export {
  checkStringLength,
  isPalindrome,
  parseNumber,
  changeString
};
