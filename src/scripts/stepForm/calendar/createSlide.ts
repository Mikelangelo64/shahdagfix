type TMonthLabel =
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug';

const createSlide = (date: Date, index: number) => {
  const day = date.getDate();
  let monthLabel: TMonthLabel = 'Sep';

  switch (date.getMonth()) {
    case 0:
      monthLabel = 'Jan';
      break;
    case 1:
      monthLabel = 'Feb';
      break;
    case 2:
      monthLabel = 'Mar';
      break;
    case 3:
      monthLabel = 'Apr';
      break;
    case 4:
      monthLabel = 'May';
      break;
    case 5:
      monthLabel = 'Jun';
      break;
    case 6:
      monthLabel = 'Jul';
      break;
    case 7:
      monthLabel = 'Aug';
      break;
    case 8:
      monthLabel = 'Sep';
      break;
    case 9:
      monthLabel = 'Oct';
      break;
    case 10:
      monthLabel = 'Nov';
      break;
    case 11:
      monthLabel = 'Dec';
      break;
    default:
      monthLabel = 'Dec';
  }

  const slide = `
    <div class='swiper-slide'>
      <button 
        class='${
          index === 0 ? 'active' : ''
        } input-container__button quiz-calendar-button'
        data-value='${monthLabel} ${day}'>
        <span class='quiz-calendar-button__month'>${monthLabel}</span>
        <span class='quiz-calendar-button__day'>${day}</span>
      </button>
    </div>
  `;

  return slide;
};

export default createSlide;
