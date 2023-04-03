let timer = document.querySelector('.timerDisplay');
let reset = document.getElementById('reset');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let msecs = 00;
let secs = 00;
let mins = 00;

let timerId = null;

start.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function(){
    clearInterval(timerId);
});

reset.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = '00 : 00 : 00';
});

function startTimer(){
    msecs++
    if(msecs == 100 ){
        msecs = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecsString = msecs < 10 ? `0${msecs}` : msecs;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timer.innerHTML = `${minsString} : ${secsString} : ${msecsString}`;

}