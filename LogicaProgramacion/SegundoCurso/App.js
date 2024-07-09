let numeroSecreto; 
let numeroIntentos = 0;
let listaNumerosSorteados = [];

let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function olaMundo() {
    let numeroUser = parseInt(document.getElementById('elinput').value);
    console.log(numeroIntentos);
    if(numeroUser === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUser > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#elinput').value = '';
}

function GenerarSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function Condiciones(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    
    numeroSecreto = GenerarSecreto(); 
    numeroIntentos =  1;

    console.log(numeroSecreto); 
}

function reiniciarJuego(){
    limpiar();
    Condiciones();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

Condiciones();