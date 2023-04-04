import { EFFECTS } from './data.js';

const slider = document.querySelector('.effect-level');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');

slider.classList.add('hidden');

const DEFAULT = EFFECTS[0];
let chosenEffect = DEFAULT;

const checkingDefault = () => chosenEffect === DEFAULT;

noUiSlider.create(sliderContainer, {
  range: {
    min: DEFAULT.min,
    max: DEFAULT.max,
  },
  start: DEFAULT.max,
  step: DEFAULT.step,
  connect: 'lower'
});

sliderContainer.noUiSlider.on('update', () => {
  sliderValue.value = sliderContainer.noUiSlider.get();
});

const onUpdateSlider = () => {
  sliderContainer.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(checkingDefault()) {
    slider.classList.add('hidden');
  } else {
    slider.classList.remove('hidden');
  }
};

const onChangeValueEffect = () => {
  const value = sliderContainer.noUiSlider.get();
  uploadPreviewImg.style.filter = checkingDefault() ?
    DEFAULT.style :
    `${chosenEffect.style}(${value}${chosenEffect.unit})`;
  sliderValue.value = value;
};

const onChangeEffect = (evt) => {
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  uploadPreviewImg.className = `effects__preview--${chosenEffect.name}`;
  onUpdateSlider();
};

effects.addEventListener('change', onChangeEffect);
sliderContainer.noUiSlider.on('update', onChangeValueEffect);

const resetEffects = () => {
  chosenEffect = DEFAULT;
  onUpdateSlider();
};

export {resetEffects};
