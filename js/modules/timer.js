
export let idTempo = null; 

export function iniciarPartida(gerarNumero, idSelectNivel) { 
    let nivel = document.getElementById(idSelectNivel).value;
    
    if (nivel === "") {
        alert("Selecione um nível para iniciar a partida");
        return;
    } 
    

    if (idTempo) {
        clearInterval(idTempo);
    }

    idTempo = setInterval(gerarNumero, parseInt(nivel));
}


export function pararPartida() {
    if (idTempo) {
        clearInterval(idTempo);
        idTempo = null;
    }
}
