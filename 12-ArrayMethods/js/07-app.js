
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']; // Arreglo de indices

const meses2 = ['Julio', 'Agosto', 'Septiembre']; // Arreglo de indices

const meses3 = ['Octubre', 'Noviembre', 'Diciembre']; // Arreglo de indices

const resultado = meses.concat(meses2, meses3, "Otro mes"); // concatena o une los 2 o mas arreglos
console.log(resultado);


// spread operator
const resultado2 = [...meses, ...meses2, ...meses3, "otro mes"]; // Hace lo mismo pero con menos lineas / Y solo se ponen 3 puntos cuando sea un arreglo
console.log(resultado2);

