import { debounce } from './util.js';

const RELOAD_TIME_LIST_PICTURES = 500;

const FILTER_PICTURES_COUNT = 10;

const FILTER = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filterElement = document.querySelector('.img-filters');
const postsContainer = document.querySelector('.pictures');

let currentFilter = FILTER.DEFAULT;
let posts = [];

const sortRandom = () => Math.random() - 0.5;
const sortDiscussed = (pictureFirst, pictureNext) => pictureNext.comments.length - pictureFirst.comments.length;

const clearOldPosts = () => {
  const postsElement = postsContainer.querySelectorAll('.picture');

  postsElement.forEach((post) => {
    post.remove();
  });
};

const getFilter = () => {
  switch(currentFilter) {
    case FILTER.RANDOM:
      return [...posts].sort(sortRandom).slice(0,FILTER_PICTURES_COUNT);
    case FILTER.DISCUSSED:
      return [...posts].sort(sortDiscussed);
    default:
      return [...posts];
  }
};

const setOnFilterClick = (cb) => {
  const debouncedCallBack = debounce(cb, RELOAD_TIME_LIST_PICTURES);
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    if (evt.target.id === currentFilter) {
      return;
    }
    filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    clearOldPosts();
    debouncedCallBack(getFilter());
  });
};

const init = (data, cb) => {
  filterElement.classList.remove('img-filters--inactive');
  posts = [...data];
  setOnFilterClick(cb);
};

export { init, getFilter };
