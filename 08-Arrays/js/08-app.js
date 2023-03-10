
// Destructuring de arrays

const numeros = [10, 20, 30, 40, 50];

// Desructuring

const [ , , tercero, , quinto] = numeros;

console.log(tercero);
console.log(quinto);



const [ primero , , ,...penultimo] = numeros;   // muesta todos los elementos despues del penultimo
console.log(penultimo);
