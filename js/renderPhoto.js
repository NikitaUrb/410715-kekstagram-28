const renderPhoto = (item) => {
  const photosArray = item;
  const picturesFragment = document.createDocumentFragment();

  const newPicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  photosArray.forEach(({url, description, comments, likes}) => {
    const photo = newPicture.cloneNode(true);
    const image = photo.querySelector('.picture__img');
    const info = photo.querySelector('.picture__info');
    const like = info.querySelector('.picture__likes');
    const comment = info.querySelector('.picture__comments');

    image.src = url;
    image.alt = description;

    like.textContent = likes;
    comment.textContent = comments.length;

    picturesFragment.appendChild(photo);
  });

  return picturesFragment;
};

export {renderPhoto};
