function startTimer(){
    //pega os valores e os salva em variaveis diferentes
    var min = document.getElementById('timer').innerText;
    var sec = document.getElementById('timer').innerText;
    sec = min.substring(3,5);
    min = min.substring(0,2);
    
    //faz o casting dos valores
    sec = parseInt(sec);
    min = parseInt(min);
    if(sec === 0){
        sec = 10;
    }
    alert(sec)
}