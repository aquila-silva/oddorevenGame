import gameLogic from './modules/gameLogic.js';

import { iniciarPartida, pararPartida, idTempo} from './modules/timer.js';

let resultados = gameLogic.resultados;

document.getElementById("btnPlay").addEventListener("click", function(){
    iniciarPartida(function(){gameLogic.gerarNumero("nroAleatorio")}, "selecDif");
    gameLogic.atualizaResultados("total", "acertos", "erros");
})

document.getElementById("nroAleatorio").addEventListener("click", function(){
    gameLogic.validaAcerto("nroAleatorio");
    gameLogic.atualizaResultados("total", "acertos", "erros");
})
