import { renderBigPicture, clearLoaderListener } from './render-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const closeModal = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
  closeButton.removeEventListener('click', onCloseButtonClick);
  clearLoaderListener();
};


function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onCloseButtonClick() {
  closeModal();
}

const setInnerListeners = () => {
  document.body.addEventListener('keydown', onDocumentKeyDown);

  closeButton.addEventListener('click', onCloseButtonClick);
};

const openBigPicture = (url, description, comments, likes) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  setInnerListeners();

  renderBigPicture(url, description, comments, likes);
};

export {openBigPicture};
