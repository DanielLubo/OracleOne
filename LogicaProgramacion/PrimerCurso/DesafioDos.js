//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let day = prompt("Que dia de la semana es?")
let saturday = "Sabado"
let sunday = "Domingo"

if(day == saturday){
    alert("Buen fin de semana")
} else if(day == sunday){
    alert("Buen fin de semana")
} else (
    alert("Buena semana")
)


//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numberUser = prompt("Ingresa un numero")

if(numberUser > 0){
    alert("El numero es positivo")
} else if(numberUser < 0){
    alert("El numero es negativo")
}


//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let newScore = prompt("ingresa tu puntuacion")
let score = 100

if(newScore >= score){
    alert("Felicidades has ganado")
} else if(newScore <= score){
    alert("Intentalo nuevamente")
}


//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = prompt("Ingresa el saldo que tienes")

alert(`el saldo de tu cuenta es: ${saldoCuenta}`)
console.log("El saldo de tu cuenta es: " + saldoCuenta)


//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nameUser = prompt("Ingresa tu nombre")
alert("Bienvenido: " + ": " + nameUser)