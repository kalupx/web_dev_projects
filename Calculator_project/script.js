function getNumber(number){
    document.getElementById('calculadora-tela').value += number;
}

function clearFunction(){
    document.getElementById('calculadora-tela').value = '';
    
}

var number_1 = null;
var number_2 = null;
var resp = null;
var oldSign = null;
function operation(opSign){
    if(opSign != '='){
        oldSign = opSign;
        number_1 = parseFloat(document.getElementById('calculadora-tela').value);
    }else if(opSign ==='='){
        number_2 = parseFloat(document.getElementById('calculadora-tela').value);
        switch(oldSign){
            case '+':
                resp = number_1 + number_2;
                break;
            case '-':
                resp = number_1 - number_2;
                break;
            case '*':
                resp = number_1 * number_2;
                break;
            case '/':
                resp = number_1 / number_2;
                break;
            default:
                //inserir exception handling
                break;
                    }
    }
    clearFunction();
    document.getElementById('calculadora-tela').value = resp;
}