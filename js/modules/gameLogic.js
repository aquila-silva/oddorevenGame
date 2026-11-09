let resultados = {
    total: 0,
    acertos: 0,
    erros: 0
};

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

    if (numero % 2 === 0) {
        el.style.color = "green";
        resultados.acertos++;
    } else {
        el.style.color = "red"; 
        resultados.erros++;
    }
}

function encerrarPartida(elementoTotal, elementoAcertos, elementoErros){
    resultados .total = 0;
    resultados.acertos = 0;
    resultados.erros = 0;
    
    atualizaResultados(elementoTotal, elementoAcertos, elementoErros);
}
export default {
    resultados,
    gerarNumero,
    atualizaResultados,
    validaAcerto,
    encerrarPartida
};
