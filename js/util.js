const RELOAD_TIME_LIST_PICTURES = 500;

function debounce (callback, timeoutDelay = RELOAD_TIME_LIST_PICTURES) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce};
