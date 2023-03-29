import { renderPhotos } from './render-photos.js';
import { createUsersPhotos } from './data.js';
import './form.js';

const data = createUsersPhotos();

renderPhotos(data);
