
const autenticado = true;


// BUENAS PRACTICAS


if (autenticado) {      // NO poner autenticado === true o false porque esta implicito
  console.log("Puede ver NETFLIX");
} else {
  console.log("Error al iniciar sesion");
}


// Operador ternario       

console.log (autenticado ? "Si esta autenticado" : "No esta autenticado");