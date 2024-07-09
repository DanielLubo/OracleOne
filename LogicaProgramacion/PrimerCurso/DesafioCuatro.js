let nombre = "Daniel";
alert(`Hola ${nombre}`);

let Pregunta = prompt(`Cuál es el lenguaje de programación que más te gusta?`);


let valorUno = 4;
let valorDos = 5;
let resultado = valorUno + valorDos;


let valorTres = 6;
let valorCuatro = 2;
let resultadoDos = valorTres - valorCuatro;


// ///////////////////////////////////////////////////////////////////////////
let Edad = parseInt(prompt("Que edad tienes?"));

if(Edad >= 18){
    alert('Bienvenido eres mayor de edad');
} else if (Edad < 18){
    alert('Eres menor');
}


// //////////////////////////////////////////////////////////////////////////
let numero = parseInt(prompt('Ingresa un numero'));

if(numero > 0){
    console.log(`El numero que ingresaste ${numero} es positivo`);
    alert(`El numero que ingresaste ${numero} es positivo`);
} else if(numero < 0){
    console.log(`El numero que ingresaste ${numero} es negativo`);
    alert(`El numero que ingresaste ${numero} es negativo`);
} else {
    console.log(`El numero que ingresaste ${numero} es Cero`);
    alert(`El numero que ingresaste ${numero} es Cero`);
}


// /////////////////////////////////////////////////////////////////////////
let inicio = 1;
let final = 11

while(inicio < final){
    alert(`cuenta del ${inicio}`);
    console.log(`cuenta del ${inicio}`);
    inicio++;
}


// /////////////////////////////////////////////////////////////////////////
let nota = parseInt(prompt("Ingresa tu nota: "));
if(nota >= 7){
    alert('Has aprobado la materia o lo que sea');
    console.log('Has aprobado la materia o lo que sea');
} else{
    alert("pailas socio llorelo");
    console.log("pailas socio llorelo");
}


////////////////////////////////////////////////////////////////////////
let elNumero = Math.random();
console.log(`El numero aleatorio es ${elNumero}`);

let elNumDos = Math.floor(Math.random()*10)+1;
console.log(`El numero aleatorio es ${elNumDos}`);

let elNumTres = Math.floor(Math.random()*1000)+1;
console.log(`El numero aleatorio es ${elNumTres}`);

console.log(`Bienvenido al tal ${nombre}`);
console.log(Pregunta);
console.log(`La suma de ${valorUno} y ${valorDos} es igual a ${resultado}.`);
console.log(`La suma de ${valorTres} y ${valorCuatro} es igual a ${resultadoDos}.`);