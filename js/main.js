import { renderPhotos } from './render-photos.js';
import { setupForm } from './form.js';
import { initSlider } from './effects.js';
import { initScalingImg } from './scale.js';
import { getData } from './api.js';
import { showLoadError } from './popups.js';
import {initFilters} from './filter.js';

getData()
  .then((data) => {
    initFilters(data);
    renderPhotos(data);
  })
  .catch((err) => showLoadError(err));


setupForm();
initSlider();
initScalingImg();
