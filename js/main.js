import { renderPhotos } from './render-photos.js';
import { setupForm } from './form.js';
import { initSlider } from './effects.js';
import { initScalingImg } from './scale.js';
import { DATA } from './api.js';

renderPhotos(DATA);

setupForm();
initSlider();
initScalingImg();
