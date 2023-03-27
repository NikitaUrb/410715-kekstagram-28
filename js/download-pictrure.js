const downloadInput = document.querySelector('#upload-file');
const formEdit = document.querySelector('.img-upload__overlay');
const previewImage = document.querySelectorAll('.effects__preview');

downloadInput.addEventListener('change', () => {
  const reader = new FileReader();
  reader.readAsDataURL(downloadInput.files[0]);

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
});

export {downloadInput};
