const commentTemplate = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const countLikes = bigPicture.querySelector('.likes-count');
const photoImage = bigPicture.querySelector('.big-picture__img img');
const photoTitle = bigPicture.querySelector('.social__caption');


const renderComments = (comments) => {
  commentsList.innerHTML = '';

  comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const userPhoto = newComment.querySelector('img');
    const userMessage = newComment.querySelector('.social__text');

    userPhoto.src = comment.avatar;
    userPhoto.alt = comment.name;
    userMessage.textContent = comment.message;

    commentsList.appendChild(newComment);
  });
};


const renderBigPicture = (url, description, comments, likes) => {
  photoImage.src = url;
  photoImage.alt = description;
  countLikes.textContent = likes;
  photoTitle.textContent = description;

  renderComments(comments);
};

export {renderBigPicture};
