import { IInitializedSlider } from '../sliders/init';
import initFormControl from './formControl';

const initStepForm = (sliders: IInitializedSlider[]) => {
  const formArray =
    document.querySelectorAll<HTMLFormElement>('.quiz__form.form');

  if (formArray.length === 0 || sliders.length === 0) {
    return;
  }

  formArray.forEach((form, index) => {
    sliders.forEach(({ name, slider }) => {
      if (name === `quiz-${index}` && slider) {
        initFormControl(form, slider);
      }
    });
  });
};

export default initStepForm;
