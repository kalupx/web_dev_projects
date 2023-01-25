window.onload = function(){
    var tmp = setInterval(clock, 1);

    function clock(){
        var data = new Date();
        var horas = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();
        if(horas < 10){
            document.getElementById('horas').innerText = '0' + horas;
        }else{
            document.getElementById('horas').innerText = horas;
        }
        if(minutos < 10){
            document.getElementById('minutos').innerText =  '0' + minutos;
        }else{
            document.getElementById('minutos').innerText = minutos;
        }
        if(segundos < 10){
            document.getElementById('segundos').innerText = '0' + segundos;
        }else{
           document.getElementById('segundos').innerText = segundos;
        }
        
    }
}

