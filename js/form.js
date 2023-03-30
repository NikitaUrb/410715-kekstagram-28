const uploadInput = document.querySelector('#upload-file');
const formEdit = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelectorAll('.effects__preview');
const form = document.querySelector('#upload-select-image');
const buttonClose = document.querySelector('.img-upload__cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const img = document.querySelector('.img-upload__preview img');


const PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_LENGTH_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const onUploadInputChange = () => {
  const reader = new FileReader();
  reader.readAsDataURL(uploadInput.files[0]);
  setInnerListeners();

  if (uploadInput.value.length > 0) {
    reader.addEventListener('load', () => {
      const url = reader.result;

      img.src = url;

      formEdit.classList.remove('hidden');
      document.body.classList.add('.modal-open');

      previewImage.forEach((image) => {
        image.style.backgroundImage = `url('${url}')`;
      });
    });
  }
};

const isFieldFocused = () => document.activeElement === hashtag || document.activeElement === comment;

const closeModal = () => {
  formEdit.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
  buttonClose.removeEventListener('click', onCloseButtonClick);
  pristine.reset();
};

function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape' && !isFieldFocused()) {
    closeModal();
  }
}

function onCloseButtonClick() {
  closeModal();
}

function setInnerListeners() {
  document.body.addEventListener('keydown', onDocumentKeyDown);
  buttonClose.addEventListener('click', onCloseButtonClick);

}

const isHashtagsLength = (hashtags) => hashtags.length <= MAX_LENGTH_HASHTAGS;
const isValidateHashtag = (item) => PATTERN.test(item);
const isUniqHashtags = (hashtags) => hashtags.length === new Set(hashtags).size;

const validateHashtag = (string) => {
  const hashtags = string.trim().toLowerCase().split(' ');
  return hashtags.every(isValidateHashtag) && isHashtagsLength(hashtags) && isUniqHashtags(hashtags);
};

const validateCommentLength = (string) => string.length <= MAX_LENGTH_COMMENT;

pristine.addValidator(hashtag, validateHashtag, 'Ошибка в хэш-теге');
pristine.addValidator(comment, validateCommentLength, 'Комментарий слишком длинный');

const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if(isValid){
    form.submit();
  } else {
    evt.preventDefault();
  }
};

export const setupForm = () => {
  uploadInput.addEventListener('change', onUploadInputChange);
  form.addEventListener('submit', onFormSubmit);
};
