const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

const slider = document.querySelector('.effect-level');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');

let chosenEffect = DEFAULT_EFFECT;

const checkDefault = () => chosenEffect === DEFAULT_EFFECT;

const hideSlider = () => slider.classList.add('hidden');
const showSlider = () => slider.classList.remove('hidden');

noUiSlider.create(sliderContainer, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
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

  if(checkDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectValueChange = () => {
  const value = sliderContainer.noUiSlider.get();
  sliderValue.value = value;

  uploadPreviewImg.style.filter = checkDefault()
    ? DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${value}${chosenEffect.unit})`;
};

const onEffectChange = (evt) => {
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  uploadPreviewImg.className = `effects__preview--${chosenEffect.name}`;
  onUpdateSlider();
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  onUpdateSlider();
};

const initSlider = () => {
  effects.addEventListener('change', onEffectChange);
  sliderContainer.noUiSlider.on('update', onEffectValueChange);

  sliderContainer.noUiSlider.on('update', () => {
    sliderValue.value = sliderContainer.noUiSlider.get();
  });
};

export {resetEffects, initSlider};
