import { renderComments } from './renderComments.js';

const bigPicture = document.querySelector('.big-picture');

const renderBigPicture = (url, description, comments, likes) => {
  const countLikes = bigPicture.querySelector('.likes-count');
  const photoImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
  const photoTitle = bigPicture.querySelector('.social__caption');

  photoImage.src = url;
  photoImage.alt = description;
  countLikes.textContent = likes;
  photoTitle.textContent = description;

  renderComments(comments);
};

export {renderBigPicture};
