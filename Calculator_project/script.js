function getNumber(number){
    document.getElementById('calculadora-tela').value += number;
}

function clearFunction(){
    document.getElementById('calculadora-tela').value = '';
}

var number_2_bool =false;
var number_1 = null;
var number_2 = null;
var resp = 0;
function operation(){
    if(operation === '=' && number_2 === null){
        resp = number_1;
    }else{
        if(!number_2_bool){
            number_1 = parseFloat(document.getElementById('calculadora-tela').value);
            number_2_bool = true;
            console.log(`o numero 1 é ${number_1}`)
        }else{
            number_2 = parseFloat(document.getElementById('calculadora-tela').value);
            number_2_bool = false;
            console.log(`o numero 2 é ${number_2}`)
        }
    }
    clearFunction();
    alert(resp);
}