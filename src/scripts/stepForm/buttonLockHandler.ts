const buttonLockHandler = (slide: HTMLElement) => {
  const inputRequiredArray =
    slide.querySelectorAll<HTMLInputElement>('input.required');

  if (inputRequiredArray.length === 0) {
    return;
  }

  const buttonArray = slide.querySelectorAll<HTMLElement>(
    '.quiz-next, .quiz-submit'
  );

  let isHasValue = false;

  inputRequiredArray.forEach((input) => {
    isHasValue = !input.value;
  });

  if (!isHasValue || buttonArray.length === 0) {
    return;
  }

  buttonArray.forEach((button) => {
    button.classList.add('locked');
  });
};

export default buttonLockHandler;
