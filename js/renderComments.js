const commentTemplate = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
commentsList.textContent = '';


const renderComments = (comments) => {
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

export {renderComments};
