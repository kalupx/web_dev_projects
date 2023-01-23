var min = null, sec = null, tmp = null;
function preparaTimer(){
    clearInterval(tmp);
    var time = document.getElementById('timer').innerText;
    min = parseInt(time.substring(0,2));
    sec = parseInt(time.substring(3,5));
    tmp = setInterval(timer, 1000);
}

function timer(){
    sec--;
    if(sec === 0){
        sec = 9;
        min--;
    }
    if(sec < 10){
        document.getElementById('timer').innerText = min + ":0" + sec;
    }
}