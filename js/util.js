const ALERT_SHOW_TIME = 5000;

const errorMessage = document.querySelector('#error');
const successMessage = document.querySelector('#success');

const showLoadError = (message) => {
  const alertContainer = errorMessage.content;
  const messageText = alertContainer.querySelector('.error__title');
  const button = alertContainer.querySelector('button');

  button.addEventListener('click', () => location.reload());

  messageText.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const showErrorAlert = () => {
  const alertContainer = errorMessage.content;
  const button = alertContainer.querySelector('button');

  document.body.append(alertContainer);

  button.addEventListener('click', () => {
    document.querySelector('.error').remove();
  });

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = () => {
  const alertContainer = successMessage.content;
  const button = alertContainer.querySelector('button');

  button.addEventListener('click', () => {
    document.querySelector('.success').remove();
  });

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showErrorAlert, showSuccessMessage, showLoadError};
