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
    if(sec <= 0){
        if(min == 0){
            clearInterval(tmp);
            document.getElementById('timer').innerText = "00:00";
            return;
        }
        sec = 5;
        min--;
    }
    if(sec < 10 && min < 10){
        document.getElementById('timer').innerText = "0" + min + ":0" + sec;
    }else if(sec < 10){
        document.getElementById('timer').innerText = min + ":0" + sec;
    }else if(min < 10){
        document.getElementById('timer').innerText = "0" + min + ":" + sec;
    }else{
        document.getElementById('timer').innerText = min + ":" + sec;
    }
}

function activeChange(buttonType){
    clearInterval(tmp);
    document.getElementById('pomodoro-id').className = 'inactive-btn';
    document.getElementById('short-break-id').className = 'inactive-btn';
    document.getElementById('long-break-id').className = 'inactive-btn';
    document.getElementById(buttonType).className = 'active-btn';
    switch(buttonType){
        case 'pomodoro-id':
            document.getElementById('timer').innerText = '45:00'
            break;
        case 'short-break-id':
            document.getElementById('timer').innerText = '03:00'
            break;
        case 'long-break-id':
            document.getElementById('timer').innerText = '15:00'
            break;
        default:
            alert('switch break')
    }
}
