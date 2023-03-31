import { renderPhotos } from './render-photos.js';
import { createUsersPhotos } from './data.js';
import { setupForm } from './form.js';

const data = createUsersPhotos();

renderPhotos(data);

setupForm();
