import Swiper from 'swiper';
import initButtonsNextPrev from './initButtonsNextPrev';
import inputRequieredHandler from './inputRequieredHadler';
import onSubmitHandler from './onSubmitHandler';

const initFormControl = (form: HTMLElement, slider: Swiper) => {
  initButtonsNextPrev(slider);

  slider.slides.forEach((slide) => {
    inputRequieredHandler(slide);
  });

  onSubmitHandler(form, slider);
};

export default initFormControl;
