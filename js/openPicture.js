import { renderBigPicture } from './renderBigPicture.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');

const closeBigPicture = () => {
  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
    }
  });

  closeButton.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  });
};


const openBigPicture = (url, description, comments, likes) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  loader.classList.add('hidden');
  closeBigPicture();

  renderBigPicture(url, description, comments, likes);
};

export {openBigPicture};
