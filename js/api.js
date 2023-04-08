const DEFAULT_URL = 'https://28.javascript.pages.academy/kekstagram';
const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const METHOD = {
  GET: 'GET',
  POPST: 'POST'
};
const ERROR_TEXT = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, errorText, method = METHOD.GET, body = null) =>
  fetch(`${DEFAULT_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(ROUTE.GET_DATA, ERROR_TEXT.GET_DATA);

const sendData = (body) => load(ROUTE.SEND_DATA, ERROR_TEXT.SEND_DATA, METHOD.POPST, body);

export {getData, sendData};
