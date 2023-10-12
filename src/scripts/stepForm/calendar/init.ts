import { IInitializedSlider } from '@/scripts/sliders/init';
import Swiper from 'swiper';
import createSlide from './createSlide';

const calendarInitHandler = (slider: Swiper, dateArray: Date[]) => {
  const slides: string[] = [];

  slider.removeAllSlides();
  slider.update();

  dateArray.forEach((date, index) => {
    const slide = createSlide(date, index);
    slides.push(slide);
  });

  slider.appendSlide(slides);
  slider.update();
};

const calendarInit = (
  sliders: IInitializedSlider[],
  calendarDaysCount: number
) => {
  const dateArray: Date[] = [];

  const now = new Date();
  dateArray.push(now);

  for (let i = 1; i < calendarDaysCount; i += 1) {
    const future = new Date(now);
    future.setDate(now.getDate() + i);
    dateArray.push(future);
  }

  sliders.forEach(({ name, slider }) => {
    if (name.includes('calendar') && slider) {
      calendarInitHandler(slider, dateArray);
    }
  });
};

export default calendarInit;
