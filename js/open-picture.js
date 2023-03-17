import { renderBigPicture } from './render-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');

const closeModal = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
};


function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

const oonCloseButtonClick = () => closeModal();

const setInnerListeners = () => {
  document.body.addEventListener('keydown', onDocumentKeyDown);

  closeButton.addEventListener('click', oonCloseButtonClick);
};

const openBigPicture = (url, description, comments, likes) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  loader.classList.add('hidden');
  setInnerListeners();

  renderBigPicture(url, description, comments, likes);
};

export {openBigPicture};
