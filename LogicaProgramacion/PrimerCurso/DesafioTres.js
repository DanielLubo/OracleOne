//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let numero = 1;
let final = 10;

while(numero <= final){
    alert(`contando ${numero}`);
    console.log(`numeros ${numero}`);
    numero = numero + 1;
    
}


//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
let elFinal = 0;

while(contador  >= elFinal){
    alert(`contando ${contador }`);
    console.log(`numeros ${contador }`);
    contador  = contador  - 1;
    
}


//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let cuenta = prompt("Ingresa el numero final");
let iniciador = 0;

while(iniciador <= cuenta){
    console.log(`contando ${iniciador}`);

    iniciador = iniciador + 1;
}



