let numeroAlcance = parseInt(prompt('Ingresa el rango de los numeros aleatorios: '))
let numeroSecreto = Math.floor(Math.random()*numeroAlcance)+1;;
let numero = 0;
let intentos = 1;
let maximoIntentos = 90;

while (numero != numeroSecreto){
    
    numero = parseInt(prompt(`Ingresa un numero entre 1 y ${numeroAlcance}:`));
    console.log(numeroSecreto);

    if(numero == numeroSecreto){
        alert(`Acertaste el numero es: ${numeroSecreto}, Lo hiciste en ${intentos}, ${intentos == 1 ? 'vez' : 'veces'} `);
    } else {
        if(numero  > numeroSecreto){
            alert("El numero es menor")
        } else{
            alert("El numero es mayor")
        }

        intentos ++;
        if(intentos > maximoIntentos){
            alert("Has superado el limite de intentos");
            break;
        }
    }
}


// let numeroDos = prompt("a")

// if(numeroDos > 0){
//     console.log("positivo para alcaloide de cocaina")
//     alert("positivo para alcaloide de cocaina")
// } else if(numeroDos < 0){
//     console.log("negativo mi perro")
//     alert("negativo mi perro")
// } else{
//     console.log("aaa")
//     alert("es cero5")
// }

