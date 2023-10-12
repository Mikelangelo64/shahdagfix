import Swiper from 'swiper';

const initButtonsNextPrev = (slider: Swiper) => {
  const buttonNextArray = slider.el.querySelectorAll<HTMLElement>('.quiz-next');

  const buttonPrevArray = slider.el.querySelectorAll<HTMLElement>('.quiz-prev');

  if (buttonNextArray.length !== 0) {
    buttonNextArray.forEach((buttonNext) => {
      buttonNext.addEventListener('click', () => {
        slider.slideNext();
      });
    });
  }

  if (buttonPrevArray.length !== 0) {
    buttonPrevArray.forEach((buttonPrev) => {
      buttonPrev.addEventListener('click', () => {
        slider.slidePrev();
      });
    });
  }
};

export default initButtonsNextPrev;
