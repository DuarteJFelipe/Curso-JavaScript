
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// nos dice que tipo de dato es
console.log(typeof numero1);        // = string

// Convertir de String a entero
console.log(Number.parseInt(numero1));

// Convertir de String a float
console.log(Number.parseFloat(numero2));


// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));     // = true
console.log(Number.isInteger(numero3));     // = false