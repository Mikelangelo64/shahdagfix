import Swiper from 'swiper';
import initButtonsNextPrev from './initButtonsNextPrev';
import inputRequieredHandler from './inputRequieredHadler';
import onSubmitHandler from './onSubmitHandler';
import buttonInputHandler from './buttonInput';
import calendarInit from './calendar/init';
import { IInitializedSlider } from '../sliders/init';
import buttonLockHandler from './buttonLockHandler';

const initFormControl = (
  form: HTMLElement,
  slider: Swiper,
  sliders: IInitializedSlider[],
  calendarDaysCount: number
) => {
  initButtonsNextPrev(slider);

  slider.slides.forEach((slide) => {
    buttonLockHandler(slide);
    inputRequieredHandler(slide);
  });

  calendarInit(sliders, calendarDaysCount);

  buttonInputHandler(slider.el);

  onSubmitHandler(form, slider);
};

export default initFormControl;
