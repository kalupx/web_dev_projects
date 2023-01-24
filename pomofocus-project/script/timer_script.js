var min = null, sec = null, tmp = null, pause = false;
function preparaTimer(){
    if(!pause){
        pause = true;
        document.getElementById('start-btn-title').innerText = "PAUSE"
        clearInterval(tmp);
        var time = document.getElementById('timer').innerText;
        min = parseInt(time.substring(0,2));
        sec = parseInt(time.substring(3,5));
        tmp = setInterval(timer, 1000);
    }else if(pause){
        pause = false;
        document.getElementById('start-btn-title').innerText = "START";
        clearInterval(tmp);
    }
}

function timer(){
    sec--;
    if(sec === 0){
        sec = 5;
        min--;
    }
    if(sec < 10){
        document.getElementById('timer').innerText = min + ":0" + sec;
    }else{
        document.getElementById('timer').innerText = min + ":" + sec;
    }
}

function activeChange(buttonType){
    document.getElementById('pomodoro-id').className = 'inactive-btn';
    document.getElementById('short-break-id').className = 'inactive-btn';
    document.getElementById('long-break-id').className = 'inactive-btn';
    document.getElementById(buttonType).className = 'active-btn';
}