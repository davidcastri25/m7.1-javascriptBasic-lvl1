/* 1- L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' (per activar la consola ->; F12). Pista: Console.log() */
console.log("Hola mundo!");

/* 2- Crea un alert que mostri el teu nom: */
alert("Me llamo David!");

/* 3- Crea una variable que contingui el teu nom i un altre que contingui el teu cognom. */
let nombre = "David";
let apellido = "Castrillón";

console.log(nombre + " " + apellido);

/* 4- Crea dos variables amb dos números i fes una suma entre ells. */
let numero1 = 5;
let numero2 = 10;

console.log("La suma entre " + numero1 + " y " + numero2 + " es " + (numero1 + numero2) + ".");

/* 5- Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF) */

let notaExamen = parseFloat(prompt("Introduce tu nota (entre 0 y 10):"));

if (notaExamen > 10) {
    alert(" Error en el dato introducido. La nota máxima es un 10.");
}
else if (notaExamen >= 5) {
    alert("Felicidades! Has aprobado el examen con una nota de " + notaExamen + ".");
}
else if (notaExamen >= 0) {
    alert("Lástima! Has suspendido el examen con una nota de " + notaExamen + ".");
}
else {
    alert(" Error en el dato introducido. La nota mínima es un 0.");
}

/* 6- Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u. */

let frase = "Tinc un cotxe de color blau.";
console.log(frase);

frase = frase.replace(/blau/gi, "verd" );
console.log(frase);

frase = "Tinc un cotxe de color blau.";
console.log(frase);

frase = frase.replace(/o/gi, "u" );
console.log(frase);

/* 7- Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'libreta', per un bucle que mostri per pantalla cada objecte i la seva posició al llistat. */

let arrObjectes = ["taula", "cadira", "ordinador", "llibreta"];

for (let i = 0; i < arrObjectes.length; i++) {
    console.log("L'objecte " + arrObjectes[i] + " està a la posició " + i + ".");
}

/* 8- Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2. 
Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla. */

function calculadora(operacion, num1, num2) {
    let resultado; 
    let mensaje;   

    if (operacion == "/" && num2 ==0){
        mensaje = "No se puede dividir entre 0.";
    }
    else {
        switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        default:
            resultado = num1 / num2;    
        }

        mensaje = "El resultado de la operación es: " + resultado + ".";
    }    

    return mensaje;
}

//Ejercicio 8 sigue en ciber.html