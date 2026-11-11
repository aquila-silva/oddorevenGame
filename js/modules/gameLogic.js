let resultados = {
    total: 0,
    acertos: 0,
    erros: 0
};

let partidaIniciada = false;

function iniciarPartida(elementoSelectDificuldade){
    
    let select = document.getElementById(elementoSelectDificuldade);
    if(select.value != ""){
        partidaIniciada = true;
        select.disabled = true;
        select.style.color = "Red";
        select.style.opacity = "0.7"
    }
}
function encerrarPartida(elementoSelectDificuldade){
    partidaIniciada = false;
    let select = document.getElementById(elementoSelectDificuldade);
    select.disabled = false;
    select.style.cursor = "pointer";
    select.style.color = "Black";
    select.style.opacity = "1"
}

function alterarNivel(){
    if(partidaIniciada){
        alert("Para alterar o o nível de dificuldade, reinicie a partida selecionando a opção Stop");
    }
}

// Variável que controla se o usuário já interagiu com o número atual
let jaClicou = false; 

function gerarNumero(elementoNumero, elementoTotal, elementoAcertos, elementoErros) {
    jaClicou = false; // Reseta a flag para o novo número
    
    let random = Math.floor((Math.random() * 100) + 1);
    let el = document.getElementById(elementoNumero);
    
    el.innerHTML = random;
    el.style.color = "black";
    
    if (random % 2 === 0) {
        resultados.total++;
    }
    atualizaResultados(elementoTotal, elementoAcertos, elementoErros)
}

function atualizaResultados(elementoTotal, elementoAcertos, elementoErros) {
    document.getElementById(elementoTotal).innerHTML = resultados.total;
    document.getElementById(elementoAcertos).innerHTML = resultados.acertos;
    document.getElementById(elementoErros).innerHTML = resultados.erros;
}

function validaAcerto(elementoNumero) {
    // Se já clicou nessa rodada, ignora cliques repetidos
    if (jaClicou) return; 

    let el = document.getElementById(elementoNumero);
    let numero = parseInt(el.innerHTML);

    jaClicou = true; // Bloqueia novos cliques até o próximo número


    if(el.innerHTML != "_"){
    
        if (numero % 2 === 0) {
            el.style.color = "green";
            resultados.acertos++;
        } else {
            el.style.color = "red"; 
            resultados.erros++;
        }
    }
    
}

function exibeResultados(elementoTotal, elementoAcertos, elementoErros){
    alert(`Partida Finalizada!\nResultados:\nTotal de números pares sorteados: ${resultados.total}\nAcertos: ${resultados.acertos}\nErros: ${resultados.erros}` 
    );
}

function apagarResultados(elementoTotal, elementoAcertos, elementoErros, elementoNumero){
    resultados.total = 0;
    resultados.acertos = 0;
    resultados.erros = 0;
    document.getElementById(elementoNumero).innerHTML = "_";
    document.getElementById(elementoNumero).style.color = "Black";
    atualizaResultados(elementoTotal, elementoAcertos, elementoErros)
}

export default {
    resultados,
    gerarNumero,
    atualizaResultados,
    validaAcerto,
    exibeResultados,
    apagarResultados,
    iniciarPartida,
    encerrarPartida,
    alterarNivel

}
