import '../sass/actions.scss';
import { colors } from './colors';
const refs = {
  startBtn: document.querySelector('button[ data-action="start"]'),
  stopBtn: document.querySelector('button[ data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switcher = {
  intervalId: null,
  isActive: false,

  startSwitchColor() {
    this.isActive = true;
    if (this.isActive) {
      refs.startBtn.setAttribute('disabled', 'disabled');
      refs.startBtn.classList.add('disabled');
    }
    this.intervalId = setInterval(() => {
      const randomColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  },

  stopSwitchColor() {
    this.isActive = false;
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.classList.remove('disabled');
    clearInterval(this.intervalId);
  },
};

refs.startBtn.addEventListener(
  'click',
  switcher.startSwitchColor.bind(switcher),
);

refs.stopBtn.addEventListener('click', switcher.stopSwitchColor.bind(switcher));
