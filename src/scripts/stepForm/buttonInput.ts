const buttonInputHandler = (container: HTMLElement) => {
  const buttonContainerArray =
    container.querySelectorAll<HTMLElement>('.input-container');

  if (buttonContainerArray.length === 0) {
    return;
  }

  buttonContainerArray.forEach((buttonContainer) => {
    const buttonArray = buttonContainer.querySelectorAll<HTMLElement>(
      '.input-container__button'
    );

    if (buttonArray.length === 0) {
      return;
    }

    buttonArray.forEach((button) => {
      button.addEventListener('click', () => {
        buttonArray.forEach((otherButton) => {
          otherButton.classList.remove('active');
        });

        button.classList.add('active');
      });
    });
  });
};

export default buttonInputHandler;
