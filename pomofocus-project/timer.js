const pauseButton = document.querySelector("#pause_button_id");
const clock = document.querySelector(".clock");

pauseButton.addEventListener("click", timer);

let isPaused = true;
let intervalId;

function timer() {
    if (isPaused) {
        start();
        isPaused = false;
    }
    else if (!isPaused) {
        pause(intervalId);
        isPaused = true;
    }
}

//start
function start() {
    pauseButton.innerText = "Pause";
    intervalId = setInterval(() => {
        let seconds = clock.innerHTML.split(':')[1];
        let minutes = clock.innerHTML.split(':')[0];

        seconds = parseInt(seconds);
        minutes = parseInt(minutes);

        if (seconds === 0) {
            if (minutes === 0) {
                stop(intervalId);
            } else {
                //mudar, tempo valores
                seconds = 5;
                minutes--;
            }
        } else {
            seconds--;
        }

        //renderiza
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        clock.innerHTML = minutes + ':' + seconds;

    }, 100)
}
//pause
function pause(intervalId) {
    clearInterval(intervalId);
    pauseButton.innerText = "Start";
}
//stop
function stop(intervalId) {
    alert("STOP");
    pause(intervalId);
}