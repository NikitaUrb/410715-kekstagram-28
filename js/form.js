const downloadInput = document.querySelector('#upload-file');
const formEdit = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelectorAll('.effects__preview');
const form = document.querySelector('#upload-select-image');
const buttonClose = document.querySelector('.img-upload__cancel');
const buttonSubmit = document.querySelector('.img-upload__submit');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const editImage = () => {
  const reader = new FileReader();
  reader.readAsDataURL(downloadInput.files[0]);
  setInnerListeners();

  if (downloadInput.value.length > 0) {
    formEdit.classList.remove('hidden');
    document.body.classList.add('.modal-open');

    reader.addEventListener('load', () => {
      const url = reader.result;
      const img = document.querySelector('.img-upload__preview img');

      formEdit.classList.remove('hidden');
      document.body.classList.add('.modal-open');

      img.src = url;

      previewImage.forEach((image) => {
        image.style.backgroundImage = `url('${url}')`;
      });
    });
  }
};

downloadInput.addEventListener('change', editImage);

const isFocusInput = () => document.activeElement === hashtag || document.activeElement === comment;

const closeEditImage = () => {
  formEdit.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
  buttonClose.removeEventListener('click', onCloseButtonClick);
  pristine.reset();
};

function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape' && !isFocusInput()) {
    closeEditImage();
  }
}

function onCloseButtonClick() {
  closeEditImage();
}

function setInnerListeners() {
  document.body.addEventListener('keydown', onDocumentKeyDown);
  buttonClose.addEventListener('click', onCloseButtonClick);

}
const blockSubmit = (evt) => evt.preventDefault();


const hashtagValidate = (string) => {
  const pattern = /^#[a-zа-яё0-9]{1,19}$/i;
  if(!pattern.test(string)) {
    form.addEventListener('submit', blockSubmit);
    return false;
  } else {
    form.removeEventListener('submit', blockSubmit);
    return true;
  }
};

const commentLength = (string) => {
  if (string.length <= 140) {
    form.removeEventListener('submit', blockSubmit);
    return true;
  } else {
    form.addEventListener('submit', blockSubmit);
    return false;
  }
};

pristine.addValidator(hashtag, hashtagValidate, 'Ошибка в хэш-теге');
pristine.addValidator(comment, commentLength, 'Комментарий слишком длинный');

export {downloadInput};
