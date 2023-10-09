import debounce from '../config/debounce';
import vevet from '../config/vevet';

const listenerHandler = (wrapperArray: NodeListOf<HTMLElement>) => {
  wrapperArray.forEach((wrapper) => {
    const { width: widthWrapper } = wrapper.getBoundingClientRect();
    let widthChildren = 0;

    const itemArray =
      wrapper.querySelectorAll<HTMLElement>('.footer-main__item');

    if (itemArray.length === 0) {
      return;
    }

    itemArray.forEach((item) => {
      const { width } = item.getBoundingClientRect();

      widthChildren += width;
    });

    const gap =
      Math.floor(
        ((widthWrapper - widthChildren) / (itemArray.length - 1)) * 100
      ) / 100;

    wrapper.style.setProperty('--footer-main-gap', `${gap}px`);
  });
};

const footerLinesHelper = () => {
  const wrapperArray = document.querySelectorAll<HTMLElement>('.footer-main');
  if (wrapperArray.length === 0) {
    return;
  }

  if (!vevet.viewport.isPhone) {
    listenerHandler(wrapperArray);
  }

  window.addEventListener(
    'resize',
    debounce({
      callback: () => {
        if (vevet.viewport.isPhone) {
          return;
        }

        listenerHandler(wrapperArray);
      }
    })
  );
};

export default footerLinesHelper;
