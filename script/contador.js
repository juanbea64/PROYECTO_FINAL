document.querySelector("#btnSumar").addEventListener("click", sumarUno);
document.querySelector("#btnRestar").addEventListener("click", restarUno);
let contador=0;
function sumarUno () {
    contador=contador+1;
    document.querySelector("#msgContador").innerHTML=contador
}

function restarUno () {
    if(contador == 0){

    }else{
        contador= contador-1; 
        document.querySelector("#msgContador").innerHTML=contador;
    }
    
}