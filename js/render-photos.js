import { openBigPicture } from './open-picture.js';

const pictures = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const newPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhotos = (photos) => {
  photos.forEach(({url, description, comments, likes}) => {
    const photo = newPicture.cloneNode(true);
    const image = photo.querySelector('.picture__img');
    const info = photo.querySelector('.picture__info');
    const like = info.querySelector('.picture__likes');
    const comment = info.querySelector('.picture__comments');

    image.src = url;
    image.alt = description;

    like.textContent = likes;
    comment.textContent = comments.length;

    photo.addEventListener('click', () => {
      openBigPicture(url, description, comments, likes);
    });

    picturesFragment.appendChild(photo);
  });

  pictures.appendChild(picturesFragment);
};

export {renderPhotos};
