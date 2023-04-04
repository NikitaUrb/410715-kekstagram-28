const valueScale = document.querySelector('.scale__control--value');
const buttonDecrease = document.querySelector('.scale__control--smaller');
const buttonZoom = document.querySelector('.scale__control--bigger');
const img = document.querySelector('.img-upload__preview img');

const STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const onDecreaseImg = () => {
  buttonDecrease.addEventListener('click', () => {
    const currentValue = Number.parseInt(valueScale.value, 10);
    const newValue = currentValue - STEP;
    valueScale.value = `${newValue}%`;
    if (newValue <= MIN_SCALE) {
      valueScale.value = `${MIN_SCALE}%`;
    }
    img.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
  });
};

const onZoomImg = function () {
  buttonZoom.addEventListener('click', () => {
    const currentValue = Number.parseInt(valueScale.value, 10);
    const newValue = currentValue + STEP;
    valueScale.value = `${newValue}%`;
    if (newValue >= MAX_SCALE) {
      valueScale.value = `${MAX_SCALE}%`;
    }
    img.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
  });

};

export {onDecreaseImg, onZoomImg};
