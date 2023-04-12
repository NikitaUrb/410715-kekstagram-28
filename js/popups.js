const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

let alertContainer;
let alertMessage;

const onDocumentKeydown = (evt) => {

  if (evt.key === 'Escape') {
    alertContainer.remove();
    document.body.removeEventListener('keydown', onDocumentKeydown);
    document.body.removeEventListener('click', onDocumentClick);
  }
};

function onDocumentClick (evt) {
  const withinBoundaries = evt.composedPath().includes(alertMessage);

  if (!withinBoundaries) {
    alertContainer.remove();
  }
}

const reloadPage = (evt) => {
  if (evt.key === 'Enter') {
    location.reload();
  }
};

const showLoadError = (message) => {
  const loadErrorMessage = errorMessage.cloneNode(true);
  const messageText = loadErrorMessage.querySelector('.error__title');
  const button = loadErrorMessage.querySelector('button');

  loadErrorMessage.style = 'line-height: 40px';

  button.addEventListener('click', () => location.reload());
  document.body.addEventListener('keydown', reloadPage);

  messageText.textContent = message;

  document.body.append(loadErrorMessage);
};


const showErrorAlert = () => {
  alertContainer = errorMessage.cloneNode(true);
  alertMessage = alertContainer.querySelector('.error__inner');
  const button = alertContainer.querySelector('button');

  document.body.append(alertContainer);

  button.addEventListener('click', () => {
    alertContainer.remove();
  });

  document.body.addEventListener('click', onDocumentClick);

  document.body.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessMessage = () => {
  alertContainer = successMessage.cloneNode(true);
  alertMessage = alertContainer.querySelector('.success__inner');
  const button = alertContainer.querySelector('button');

  document.body.addEventListener('click', onDocumentClick);

  button.addEventListener('click', () => {
    alertContainer.remove();
  });

  document.body.addEventListener('keydown', onDocumentKeydown);

  document.body.append(alertContainer);
};

export {showErrorAlert, showSuccessMessage, showLoadError};
