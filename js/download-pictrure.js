const downloadInput = document.querySelector('#upload-file');
const formEdit = document.querySelector('.img-upload__overlay');

downloadInput.addEventListener('change', () => {
  const reader = new FileReader();
  reader.readAsDataURL(downloadInput.files[0]);

  if (downloadInput.value.length > 0) {
    formEdit.classList.remove('hidden');
    document.body.classList.add('.modal-open');

    reader.addEventListener('load', () => {
      const url = reader.result;
      formEdit.classList.remove('hidden');
      document.body.classList.add('.modal-open');
      const img = document.querySelector('.img-upload__preview img');
      img.src = url;
    });
  }
});

export {downloadInput};
