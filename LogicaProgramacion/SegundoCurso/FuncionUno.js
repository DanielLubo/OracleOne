// Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log("¡Hola, mundo!");
}
mostrarHola();



// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let User = prompt('Ingresa tu nombre de usuario');

function A (User){
    console.log(User);
}

A(User);



// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function ElNumber(numeroAl){
    return numeroAl*2;    
}
let resultado = ElNumber(8);
console.log(resultado);



// Crear una función que reciba tres números como parámetros y devuelva su promedio.
let numeroUno = parseInt(prompt("Ingresa el primer numero"));
let numeroDos = parseInt(prompt("Ingresa el segundo numero"));
let numeroTres = parseInt(prompt("Ingresa el tercer numero"));

function LosNumeros(numeroUno, numeroDos, numeroTres){
    return (numeroUno + numeroDos + numeroTres)/3;
}

let PromedioTres = LosNumeros(numeroUno, numeroDos, numeroTres);
console.log(PromedioTres);



// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numero1 = parseInt(prompt("Ingresa el primer numero"));
let numero2 = parseInt(prompt("Ingresa el segundo numero"));

function obtenerMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

let numeroMayor = obtenerMayor(numero1, numero2); 
console.log(numeroMayor); 



// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

let NumberM = parseInt(prompt("Ingresa un numero para ser multiplicado por si mismo"));

function Multiplicacion (NumberM){
    return NumberM * NumberM;
}

let Solucion = Multiplicacion(NumberM);
console.log(Solucion);