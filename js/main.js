import gameLogic from './modules/gameLogic.js';

import { iniciarPartida, pausarPartida, relogio, encerrarPartida} from './modules/timer.js';



document.getElementById("btnPlay").addEventListener("click", function(){
    iniciarPartida(
        function(){gameLogic.gerarNumero("nroAleatorio", "total", "acertos", "erros")},
        "selecDif",
        function(){ relogio("timerRodada", 30)}
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
        gameLogic.encerrarPartida("total", "acertos", "erros");
        encerrarPartida("timerRodada");
    }
})