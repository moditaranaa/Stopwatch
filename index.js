var timer = document.getElementById('timer');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

let count = 0;
let interval = null;

function timeSet() {
    count++;
    // console.log("second is: ", count);

    // Formulae for HH:MM:SS format
    let hours = Math.floor(count / 3600); //3600,7200,10800
    // console.log(hours);
    let minutes = Math.floor((count - hours * 3600) / 60);
    // console.log(minutes);
    let seconds = Math.floor(count % 60); //1,2
    // console.log(seconds);

    //The below if conditions are to handle single digit numbers - to follow 00 format
    //01,02,03,04,05,06,07,08,09
    if (seconds < 10) {
        seconds = '0' + seconds; // 01,02
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    //Browser Display
    timer.innerText = `${hours}:${minutes}:${seconds}`;
}

//Start the Timer
function start() {
    interval = setInterval(timeSet, 1000);
}

//Stop the Timer
function stop() {
    clearInterval(interval);
}

//Reset the Timer
function reset() {
    stop();
    count = 0;
    timer.innerText = '00:00:00';
}

//Click Events
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);