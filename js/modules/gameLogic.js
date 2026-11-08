let resultados = {
    total: 0,
    acertos: 0,
    erros: 0
};

// Controla se o usuário já interagiu com o número atual da rodada
let jaClicou = false; 

function gerarNumero(elementoNumero) {
    jaClicou = false; // Reseta a flag para o novo número
    
    let random = Math.floor((Math.random() * 100) + 1);
    let el = document.getElementById(elementoNumero);
    
    el.innerHTML = random;
    el.style.color = "black";
    
    if (random % 2 === 0) {
        resultados.total++;
    }
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

export default {
    resultados,
    gerarNumero,
    atualizaResultados,
    validaAcerto
};
