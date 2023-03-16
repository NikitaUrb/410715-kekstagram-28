const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const comment = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
commentsList.textContent = '';
const closeButton = document.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');

const closeBigPicture = () => {
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  body.addEventListener('keydown', (evt) => {
    if (evt.key === 27) {
      bigPicture.classList.add('hidden');
    }
  });
};


const openBigPicture = (url, description, comments, likes) => {
  closeBigPicture();
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  loader.classList.add('hidden');

  const countLikes = bigPicture.querySelector('.likes-count');
  const photo = bigPicture.querySelector('.big-picture__img').querySelector('img');
  const photoTitle = bigPicture.querySelector('.social__caption');
  const commentsCount = bigPicture.querySelector('.comments-count');

  photo.src = url;
  photo.alt = description;
  countLikes.textContent = likes;
  photoTitle.textContent = description;
  commentsCount.textContent = comments.length;

  comments.forEach((obj) => {
    const newComment = comment.cloneNode(true);
    const userPhoto = newComment.querySelector('img');
    const userMessage = newComment.querySelector('.social__text');

    userPhoto.src = obj.avatar;
    userPhoto.alt = obj.name;
    userMessage.textContent = obj.message;

    commentsList.appendChild(newComment);
  });

};

export {openBigPicture};
