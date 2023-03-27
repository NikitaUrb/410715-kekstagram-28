import { renderPhotos } from './render-photos.js';
import { createUsersPhotos } from './data.js';
import './download-pictrure.js';

const data = createUsersPhotos();

renderPhotos(data);
