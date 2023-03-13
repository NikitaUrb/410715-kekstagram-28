import { renderPhotos } from './renderPhotos.js';
import { createUsersPhotos } from './data.js';

const data = createUsersPhotos();

renderPhotos(data);
