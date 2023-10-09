import makeSlider from './sliderHandler';
import Swiper from 'swiper';

export interface ITypesSlider {
  item: HTMLElement;
  slider: Swiper;
}

export interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
}

const sliderBrandsInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.brands'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'brands',

      config: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop: true,

        breakpoints: {
          350: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          650: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          899: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 30
          },
          1199: {
            slidesPerView: 6,
            slidesPerGroup: 3,
            spaceBetween: 50
          }
        },

        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    });

    if (slider) {
      sliders.push({ name: `brands-${sliderIndex}`, slider });
    }
  });
};

const sliderFeedbackInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.feedback'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'feedback',
      config: {
        effect: 'fade',
        // allowTouchMove: false,
        spaceBetween: 10,
        loop: true

        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      sliders.push({ name: `feedback-${sliderIndex}`, slider });
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderBrandsInit(sliders);
  sliderFeedbackInit(sliders);

  return sliders;
};

export default slidersInit;
