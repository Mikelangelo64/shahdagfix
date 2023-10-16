import makeSlider from './sliderHandler';
import Swiper from 'swiper';

export interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
}

const sliderQuizFormInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.quiz'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'quiz',
      config: {
        effect: 'fade',
        allowTouchMove: false
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (!slider) {
      return;
    }

    sliders.push({ name: `quiz-${sliderIndex}`, slider });
  });
};

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

const sliderCalendarInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.quiz-calendar'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'quiz-calendar',

      config: {
        allowTouchMove: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 12,

        breakpoints: {
          350: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          450: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          899: {
            slidesPerView: 7,
            slidesPerGroup: 7
          },
          1199: {
            slidesPerView: 7,
            slidesPerGroup: 7
          }
        }
      }
    });

    if (slider) {
      sliders.push({ name: `calendar-${sliderIndex}`, slider });
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderQuizFormInit(sliders);
  sliderBrandsInit(sliders);
  sliderFeedbackInit(sliders);
  sliderCalendarInit(sliders);

  return sliders;
};

export default slidersInit;
