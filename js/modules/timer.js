

function gerarNumero(elementoId){
    random = parseInt((Math.random()*100) + 1);
    document.getElementById(elementoId).innerHTML = random;
    return random;
}

export default{
    gerarNumero
}