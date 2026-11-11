import gameLogic from './modules/gameLogic.js';

import { iniciarPartida, pausarPartida, temporizadorPartida, encerrarPartida, definirTempoPartida, exibirTemporizador} from './modules/timer.js';

definirTempoPartida(20);
exibirTemporizador("timerRodada");

document.getElementById("btnPlay").addEventListener("click", function(){
    
    gameLogic.iniciarPartida("selecDif");
    
    iniciarPartida(

        function(){gameLogic.gerarNumero("nroAleatorio", "total", "acertos", "erros")},

        "selecDif",

        function(){ 
            if(temporizadorPartida("timerRodada")){

            gameLogic.exibeResultados("total", "acertos", "erros");
            gameLogic.apagarResultados("total", "acertos", "erros", "nroAleatorio");

            encerrarPartida("timerRodada");

            }
        }
    )

    gameLogic.atualizaResultados("total", "acertos", "erros");
})

document.getElementById("nroAleatorio").addEventListener("click", function(){
    gameLogic.validaAcerto("nroAleatorio");
    gameLogic.atualizaResultados("total", "acertos", "erros");
})

document.getElementById("btnPause").addEventListener("click", function(){
    pausarPartida();
    
})

document.getElementById("btnStop").addEventListener("click", function(){
    if(confirm("tem certeza que deseja apagar os resultados da partida atual?")){
        encerrarPartida("timerRodada");
        gameLogic.exibeResultados("total", "acertos", "erros");
        gameLogic.apagarResultados("total", "acertos", "erros", "nroAleatorio");
        gameLogic.encerrarPartida("selecDif");
        definirTempoPartida(20);
        exibirTemporizador("timerRodada");
    }
})