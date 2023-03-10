
const autenticado = true;

console.log( autenticado ? "Autenticado" : null);




// con 2 condiciones en un ternario

const usuario = true;
const puedePagar = true;


console.log( usuario && puedePagar ? "Compra confirmada" : "Revise que cumpla todos los requisitos");


// if dentro de otro  ternario

const usuario2 = true;
const puedePagar2 = true;


console.log( usuario2 ? puedePagar2 ? "Pago realizado" : "Fondos insuficientes" : "Inicie sesion o cree una cuenta nueva");















