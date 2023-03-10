const producto = "Monitor 20 pulgadas"

console.log(producto);

// .replace para Remplazar 
console.log(producto.replace("pulgadas", "\""));
console.log(producto.replace("Monitor", "Monitor curvo"));

// .slice para cortar
console.log(producto.slice(0, 15));
console.log(producto.slice(8 ));

// Alternativa a slice
console.log(producto.substring(0,10));



const usuario = "Felipe";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));


