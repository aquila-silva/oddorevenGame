import gameLogic from "./gameLogic.js";

export let idTimerNumeros = null; 

export let idTempoRodada = null;

export let tempoRodado = {minutos: 0, segundos: 0};



export function iniciarPartida(gerarNumero, elementoSelectNivel, funcaorelogio) { 
    let nivel = document.getElementById(elementoSelectNivel).value;

    if (nivel === "") {
        alert("Selecione um nível para iniciar a partida");
        return;
    } 
    
    if (idTimerNumeros) {
        clearInterval(idTimerNumeros);
    }

    if (idTempoRodada) {
        clearInterval(idTempoRodada);
    }

    //tempo da partida
    idTempoRodada = setInterval(funcaorelogio, 1000);

    //timer de geração de um novo número
    idTimerNumeros = setInterval(gerarNumero, parseInt(nivel));
     
    
}

export function definirTempoPartida(segundos){
    if(segundos >= 3600) return;
    
    if(segundos >= 60){
        tempoRodado.minutos =parseInt(segundos/60);
        tempoRodado.segundos = segundos % 60;
    }else{
        tempoRodado.minutos = 0;
        tempoRodado.segundos = segundos;
    }
}

export function exibirTemporizador(elementoCronometro){

     if(tempoRodado.segundos < 10 && tempoRodado.minutos<10){
        document.getElementById(elementoCronometro).innerHTML = `0${tempoRodado.minutos} : 0${tempoRodado.segundos}`
   }else if(tempoRodado.minutos <10 && tempoRodado.segundos > 9){
        document.getElementById(elementoCronometro).innerHTML = `0${tempoRodado.minutos} : ${tempoRodado.segundos}`
   }else if(tempoRodado.minutos > 9 && tempoRodado.segundos<10){
        document.getElementById(elementoCronometro).innerHTML = `${tempoRodado.minutos} : 0${tempoRodado.segundos}`
   }else if(tempoRodado.minutos <= 0 && tempoRodado.segundos <= 0){
        document.getElementById(elementoCronometro).innerHTML = `00 : 00`; 
   }else{
        document.getElementById(elementoCronometro).innerHTML = `${tempoRodado.minutos} : ${tempoRodado.segundos}`
   }

}

export function temporizadorPartida(elementoCronometro){

    if(tempoRodado.segundos > 0 || tempoRodado.minutos > 0){
        
        if(tempoRodado.segundos>0){
            tempoRodado.segundos--;
        }else if(tempoRodado.segundos <= 0 && tempoRodado.minutos > 0){
            tempoRodado.minutos--;
            tempoRodado.segundos = 59;
        }
      
    }else{

        encerrarPartida(elementoCronometro);
        return true;

    }

    exibirTemporizador(elementoCronometro);
    return false;
}


export function pausarPartida() {
    if (idTimerNumeros) {
        clearInterval(idTimerNumeros);
        idTimerNumeros = null;
    }

    if (idTempoRodada) {
        clearInterval(idTempoRodada);
        idTempoRodada = null;
    }
}

export function encerrarPartida(elementoCronometro){

    clearInterval(idTempoRodada);
    clearInterval(idTimerNumeros);

    exibirTemporizador(elementoCronometro);
    tempoRodado.minutos = 0;
    tempoRodado.segundos = 0;
}
