const valueScale = document.querySelector('.scale__control--value');
const buttonDecrease = document.querySelector('.scale__control--smaller');
const buttonIncrease = document.querySelector('.scale__control--bigger');
const img = document.querySelector('.img-upload__preview img');

const STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;

const setScale = (newValue) => {
  valueScale.value = `${newValue}%`;
  img.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
};

const onDecreaseButtonClick = () => {
  const currentValue = Number.parseInt(valueScale.value, 10);
  let newValue = currentValue - STEP;

  if (newValue <= MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  setScale(newValue);
};

const onIncreaseButtonClick = () => {
  const currentValue = Number.parseInt(valueScale.value, 10);
  let newValue = currentValue + STEP;

  if (newValue >= MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  setScale(newValue);
};

const initScalingImg = () => {
  buttonDecrease.addEventListener('click', onDecreaseButtonClick);
  buttonIncrease.addEventListener('click', onIncreaseButtonClick);
};

const resetScaling = () => {
  valueScale.value = `${SCALE_DEFAULT}%`;
  img.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
};

export {initScalingImg, resetScaling};
