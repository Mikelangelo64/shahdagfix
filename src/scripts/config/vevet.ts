import { Application } from 'vevet';

const vevet = new Application({
  tablet: 1199,
  phone: 899,
  prefix: 'v-',
  resizeDebounce: 100,
  easing: [0.25, 0.1, 0.25, 1],
  isVersionPrinted: true
});

export default vevet;
