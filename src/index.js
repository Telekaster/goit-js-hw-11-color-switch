const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

export const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

start.addEventListener('click', clickStartHandler);
stop.addEventListener('click', clickStopHandler);

function clickStartHandler() {
    console.log('start');
    start.classList.add('not_active')
    start.removeEventListener('click', clickStartHandler)

    setInterval(() => {
        const index = randomIntegerFromInterval(0, colors.length-1);
        console.log(colors[index]);
        return body.style.background = colors[index];
    }, 1000);
    

   
}

function clickStopHandler() {
    console.log('stop');
};

function randomIntegerFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};