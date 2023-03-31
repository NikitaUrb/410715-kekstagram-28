const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateHashtag = (value) => value === /^#[a-zа-яё0-9]{1,19}/i;

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag, 'Проверка валидации');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
