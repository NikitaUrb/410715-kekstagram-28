import { renderPhoto } from './renderPhoto.js';
import { createUsersPhotosArray } from './data.js';

const pictures = document.querySelector('.pictures');


pictures.appendChild(renderPhoto(createUsersPhotosArray()));
