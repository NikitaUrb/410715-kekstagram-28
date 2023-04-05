import { renderPhotos } from './render-photos.js';
import { createUsersPhotos } from './data.js';
import { setupForm } from './form.js';
import { initSlider } from './effects.js';
import { initScalingImg } from './scale.js';

const data = createUsersPhotos();

renderPhotos(data);

setupForm();
initSlider();
initScalingImg();
