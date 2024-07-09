// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
let altura =  parseFloat(prompt('INGRESA TU ALTURA'));
let peso =  parseInt(prompt('INGRESA TU PESO'));

function indiceMasaCorporal (altura, peso){
    let IMC = peso / (altura * altura);
    return IMC;
}

indiceMasaCorporal(altura, peso);
console.log(indiceMasaCorporal(altura, peso));




// Crea una función que calcule el valor del factorial de un número pasado como parámetro.




// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
let dolares = parseFloat(prompt('ingresa la cantida de dolares:'));

function Convertidor (dolares){
    let cotizacion = 4.80;
    let reales = dolares * cotizacion;
    return reales;
}

let valorReales = Convertidor(dolares);
console.log(`${dolares} dolar es  r$ ${valorReales}`);




// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
let altoRectangulo =  parseFloat(prompt('ingresa el alto del rectangulo'));
let anchoRectangulo =  parseFloat(prompt('ingresa el ancho del rectangulo'));


function mostrarPantalla(){
    let perimetro = perimetroRectangulo(altoRectangulo, anchoRectangulo);
    let area = areaRectangulo(altoRectangulo, anchoRectangulo);
    console.log("el perimetro del rectangulo es;", perimetro);
    console.log("El area del rectangulo es;",area);
}


function perimetroRectangulo(altoRectangulo, anchoRectangulo){
    return (altoRectangulo + anchoRectangulo)*2;
}

function areaRectangulo(altoRectangulo, anchoRectangulo){
    return (altoRectangulo * anchoRectangulo);
}

mostrarPantalla();




// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
let radio = parseFloat(prompt('ingresa el radio;'))
const pi = 3.14;

function pantalla(){
    let area = areaCirculo(radio);
    let perimetro = perimetroCirculo(radio);
    console.log("el area del circulo es;", area);
    console.log("el perimetro del cirulo es;", perimetro);
}

function areaCirculo(radio){
    return pi * radio * radio;
}

function perimetroCirculo(radio){
    return 2 * pi * radio;
}

pantalla();




// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
let numero = parseInt(prompt("Ingresa el numero"));
function tabla(numero){
    for(i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

tabla(numero);
