function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c') clear();
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
            document.getElementById('calculadora-tela').value += valor;
        }
        if(valor === '='){
            document.getElementById('calculadora-tela').value = eval(document.getElementById('calculadora-tela').value);
        }
    }else if(tipo === 'valor'){
        document.getElementById('calculadora-tela').value += valor;
    }else{
        //exception handling
        alert();
    }
}

function clear(){
    document.getElementById('calculadora-tela').value = '';
}