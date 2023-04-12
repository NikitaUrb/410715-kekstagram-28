import { sendData } from './api.js';
import { resetEffects } from './effects.js';
import { resetScaling } from './scale.js';
import { showErrorAlert, showSuccessMessage } from './popups.js';

const PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_LENGTH_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;

const uploadInput = document.querySelector('#upload-file');
const formOverlay = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelectorAll('.effects__preview');
const form = document.querySelector('#upload-select-image');
const buttonClose = document.querySelector('.img-upload__cancel');
const buttonSubmit = document.querySelector('.img-upload__submit');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const imagePreview = document.querySelector('.img-upload__preview img');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error'
});

const onUploadInputChange = () => {
  const reader = new FileReader();
  reader.readAsDataURL(uploadInput.files[0]);
  setInnerListeners();

  if (uploadInput.value.length > 0) {
    reader.addEventListener('load', () => {
      const url = reader.result;

      imagePreview.src = url;

      formOverlay.classList.remove('hidden');
      document.body.classList.add('modal-open');

      previewImage.forEach((image) => {
        image.style.backgroundImage = `url('${url}')`;
      });
    });
  }
};

const isFieldFocused = () => document.activeElement === hashtag || document.activeElement === comment;

const closeModal = () => {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.body.removeEventListener('keydown', onDocumentKeyDown);
  buttonClose.removeEventListener('click', onCloseButtonClick);
  form.reset();
  pristine.reset();
  resetEffects();
  resetScaling();
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

  if (hashtag.value.length > 0) {
    return hashtags.every(isValidateHashtag) && isHashtagsLength(hashtags) && isUniqHashtags(hashtags);
  }

  return isHashtagsLength(hashtags) && isUniqHashtags(hashtags);
};

const validateCommentLength = (string) => string.length <= MAX_LENGTH_COMMENT;

const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  evt.preventDefault();

  if(isValid){
    buttonSubmit.disabled = true;

    sendData(new FormData(evt.target))
      .then(() => {
        closeModal();
        showSuccessMessage();
      })
      .catch(() => {
        buttonSubmit.disabled = false;
        showErrorAlert();
      });
  }
};

export const setupForm = () => {
  pristine.addValidator(hashtag, validateHashtag, 'Ошибка заполнения хэштегов, хэштег должен начинаться с решетки, макс длина 20, не более 5 хэштегов');
  pristine.addValidator(comment, validateCommentLength, 'Комментарий слишком длинный');

  uploadInput.addEventListener('change', onUploadInputChange);
  form.addEventListener('submit', onFormSubmit);
};
