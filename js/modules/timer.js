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

export function relogio(elementoCronometro, tempoMaximo){

    if(tempoRodado.segundos < tempoMaximo){

        if(tempoRodado.segundos < 60){
            tempoRodado.segundos++;
        }else{
            tempoRodado.segundos = 0;
            tempoRodado.minutos++;
        }
    }else if(tempoMaximo == 0){
        document.getElementById(elementoCronometro).innerHTML = `00 : 00`; 
        return;
    }else{
        
        pausarPartida();

        gameLogic.atualizaResultados("total", "acertos", "erros");

        let resultados = gameLogic.resultados;
    
        return true;
        
    }

    return false;

   if(tempoRodado.segundos < 10 && tempoRodado.minutos<10){
        document.getElementById(elementoCronometro).innerHTML = `0${tempoRodado.minutos} : 0${tempoRodado.segundos}`
   }else if(tempoRodado.minutos <10 && tempoRodado.segundos > 9){
        document.getElementById(elementoCronometro).innerHTML = `0${tempoRodado.minutos} : ${tempoRodado.segundos}`
   }else if(tempoRodado.minutos > 9 && tempoRodado.segundos<10){
        document.getElementById(elementoCronometro).innerHTML = `${tempoRodado.minutos} : 0${tempoRodado.segundos}`
   }else{
        document.getElementById(elementoCronometro).innerHTML = `${tempoRodado.minutos} : ${tempoRodado.segundos}`
   }
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

    relogio(elementoCronometro, 0);
    tempoRodado.minutos = 0;
    tempoRodado.segundos = 0;
}
