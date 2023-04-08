import { renderPhotos } from './render-photos.js';
import { setupForm } from './form.js';
import { initSlider } from './effects.js';
import { initScalingImg } from './scale.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((data) => {
    renderPhotos(data);
  })
  .catch((error) => showAlert(error.message));


setupForm();
initSlider();
initScalingImg();
