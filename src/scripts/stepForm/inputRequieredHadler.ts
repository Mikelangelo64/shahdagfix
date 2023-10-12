const inputRequieredHandler = (slide: HTMLElement) => {
  const requiredArray =
    slide.querySelectorAll<HTMLInputElement>('input.required');

  const buttonArray = slide.querySelectorAll<HTMLElement>(
    '.quiz-next, .quiz-submit'
  );

  if (requiredArray.length === 0 || buttonArray.length === 0) {
    return;
  }

  requiredArray.forEach((input) => {
    let typingTimer: NodeJS.Timeout;
    let interval = 200;

    const doneTyping = () => {
      // console.log('done');

      const isAnyInputEmpty = !!Array.from(requiredArray).find(
        (item) => item.value === ''
      );

      // const isTelInputEmpty = !!Array.from(requiredArray).find(
      //   (item) => item.type === 'tel' && item.value.length < 19
      // );

      // console.log(requiredArray, buttonArray);

      buttonArray.forEach((button) => {
        if (isAnyInputEmpty) {
          button.classList.add('locked');
        } else {
          button.classList.remove('locked');
        }
      });
    };

    input.addEventListener('keyup', () => {
      clearTimeout(typingTimer);

      typingTimer = setTimeout(doneTyping, interval);
    });

    input.addEventListener('keydown', () => {
      clearTimeout(typingTimer);
    });
  });
};

export default inputRequieredHandler;
