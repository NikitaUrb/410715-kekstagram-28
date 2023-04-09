const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const closeModal = (alertContainer) => {
  alertContainer.remove();
  document.body.removeEventListener('keydown', closeModal);
};

const reloadPage = (evt) => {
  if (evt.key === 'Enter') {
    location.reload();
  }
};

function closeMessage (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

const showLoadError = (message) => {
  const alertContainer = errorMessage.cloneNode(true);
  const messageText = alertContainer.querySelector('.error__title');
  const button = alertContainer.querySelector('button');

  alertContainer.style = 'line-height: 40px';

  button.addEventListener('click', () => location.reload());
  document.body.addEventListener('keydown', reloadPage);

  messageText.textContent = message;

  document.body.append(alertContainer);
};


const showErrorAlert = () => {
  const alertContainer = errorMessage.cloneNode(true);
  const button = alertContainer.querySelector('button');

  document.body.append(alertContainer);

  button.addEventListener('click', () => {
    alertContainer.remove();
  });
  alertContainer.addEventListener('keydown', closeMessage);

};

const showSuccessMessage = () => {
  const alertContainer = successMessage.cloneNode(true);
  const button = alertContainer.querySelector('button');

  button.addEventListener('click', () => {
    alertContainer.remove();
  });
  document.body.addEventListener('keydown', closeMessage);

  document.body.append(alertContainer);
};

export {showErrorAlert, showSuccessMessage, showLoadError};
