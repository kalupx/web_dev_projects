let isPaused = true;
let intervalId;
let pomoCounter = 0;

clock = document.querySelector(".clock");

document.querySelector("#pause_button_id").addEventListener("click", () => {
    if (isPaused) {
        isPaused = false;
        document.querySelector("#pause_button_id").innerText = "STOP";
        startTimer();
    } else {
        isPaused = true;
        document.querySelector("#pause_button_id").innerText = "START";
        pauseTimer();
    }
})


function startTimer() {
    intervalId = setInterval(() => {
        let minutes = parseInt(clock.innerText.split(":")[0]);
        let seconds = parseInt(clock.innerText.split(":")[1]);

        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(intervalId);
                stopTimer();
            } else {
                seconds = 9;
                minutes--;
            }
        } else {
            seconds--;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        clock.innerText = minutes + ":" + seconds;
    }, 100);
}

function pauseTimer() {
    clearInterval(intervalId);
}

function stopTimer() {
    isPaused = true;
    document.querySelector("#pause_button_id").innerText = "START";

    const controlerButtons = document.querySelectorAll(".controler-button");

    for (let i = 0; i < controlerButtons.length; i++) {
        if (controlerButtons[i].id === "active-button") {
            if (controlerButtons[i].innerText === "Pomodoro") {
                pomoCounter++;
                controlerButtons[i].id = null;
                if(pomoCounter === 4){
                    pomoCounter = 0;
                    //vai pro long
                    controlerButtons[2].id = "active-button";
                    setTimeout(function () {
                        clock.innerText = "15:00";
                    }, 10);
                }else{
                    //vai pro short
                    controlerButtons[1].id = "active-button";
                    setTimeout(function () {
                        clock.innerText = "05:00";
                    }, 10);
                }
            } else {
                controlerButtons[0].id = "active-button";
                controlerButtons[i].id = null;
                setTimeout(function () {
                    clock.innerText = "25:00";
                }, 10);
            }
            break;
        }
    }
}