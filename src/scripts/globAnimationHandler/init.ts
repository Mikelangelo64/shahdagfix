import useObserver from '../config/useObserver';

const globAnimationHandler = () => {
  const globArray = document.querySelectorAll<HTMLElement>('.glob-bg');
  if (globArray.length === 0) {
    return;
  }

  globArray.forEach((item) => {
    useObserver({
      target: item,
      callbackIn: () => {
        item.classList.add('viewed');
      },
      callbackOut: () => {
        item.classList.remove('viewed');
      }
    });
  });
};

export default globAnimationHandler;
