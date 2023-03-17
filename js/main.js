import { renderPhotos } from './render-photos.js';
import { createUsersPhotos } from './data.js';

const data = createUsersPhotos();

renderPhotos(data);
