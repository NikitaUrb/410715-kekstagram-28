import { renderPhotos } from './render-photos.js';
import { setupForm } from './form.js';
import { initSlider } from './effects.js';
import { initScalingImg } from './scale.js';
import { getData } from './api.js';
import { showLoadError } from './util.js';

getData()
  .then((data) => {
    renderPhotos(data);
  })
  .catch((err) => showLoadError(err));


setupForm();
initSlider();
initScalingImg();
