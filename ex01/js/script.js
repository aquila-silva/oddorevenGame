let timerTemp;

let dif;

let travaTemp = 0;

let travaClick = 0;

document.getElementById("selecDif").addEventListener("change", function(){
    pause();
})


document.getElementById("btnPlay").addEventListener("click", function(){
    play();
})

document.getElementById("btnPause").addEventListener("click", pause)

let resultados = {total: 0, acertos: 0, erros: 0};

document.getElementById("nroAleatorio").addEventListener("click", function(event){
    
    if(event.target.innerHTML != "_"){
        if(event.target.innerHTML % 2 == 0){
        if(travaClick == 0){
                resultados.acertos++;
                travaClick++;
        }
        }else{
            if(travaClick == 0){
                resultados.erros++;
                travaClick++
            }
            
        }
    }
    
    mostrarResultados();

})

document.getElementById("btnStop").addEventListener("click", stop)

function mostrarResultados(){

    document.getElementById("total").innerHTML = resultados.total;
    document.getElementById("acertos").innerHTML = resultados.acertos;
    document.getElementById("erros").innerHTML = resultados.erros;

}

function stop(){

    if(confirm("Tem certeza que deseja apagar os resultados da partida?")){
        resultados = {total: 0, acertos: 0, erros: 0};
        alert("Partida reiniciada")
        pause();
        document.getElementById("nroAleatorio").innerHTML = "_"        
        mostrarResultados();
    }
}

function play(){

    if(travaTemp == 0){
        dif = document.getElementById("selecDif").value;
        timerTemp = setInterval(random, dif);
        travaTemp++;
        travaClick = 0;
    }else{
        return;
    }
}

function random() {

    let nmr = document.getElementById("nroAleatorio");
    nmr.innerHTML = parseInt((Math.random()*100) + 1);
    if(nmr.innerHTML % 2 ==0){
        resultados.total++;
        mostrarResultados();
    }
    
}

function pause(){
    clearInterval(timerTemp);
    travaTemp = 0;
}