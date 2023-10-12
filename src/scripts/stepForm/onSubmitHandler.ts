import Swiper from 'swiper';

const onSubmitHandler = (form: HTMLElement, slider: Swiper) => {
  const inputFormArray = form.querySelectorAll('input');
  const inputStepArray = slider.el.querySelectorAll<
    HTMLInputElement | HTMLTextAreaElement
  >('input, textarea');

  const submitButton = slider.el.querySelector<HTMLElement>('.quiz-submit');

  if (
    inputFormArray.length === 0 ||
    inputStepArray.length === 0 ||
    !submitButton
  ) {
    return;
  }

  // console.log(submitButton);
  // console.log(inputFormArray);
  // console.log(inputStepArray);

  submitButton.addEventListener('click', () => {
    inputStepArray.forEach((input) => {
      inputFormArray.forEach((formInputProp) => {
        const formInput = formInputProp;

        if (input.name === formInput.name) {
          formInput.value = input.value;

          // console.log(formInput, formInput.name);
        }
      });
    });

    setTimeout(() => {
      slider.slideTo(0);

      inputStepArray.forEach((inputProp) => {
        const input = inputProp;

        if (input.type !== 'radio') {
          input.value = '';
        }
      });
    }, 400);
  });
};

export default onSubmitHandler;
