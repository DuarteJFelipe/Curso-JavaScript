
const pendientes = ["Tarea","Comer","Proyecto","Estudiar"];

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Television", precio: 400 },
    { nombre: "Celular", precio: 800 },
    { nombre: "Audifonos", precio: 120 },
    { nombre: "Teclado", precio:  220},
]

// for (const iterator of object) {
    
// }

for (let pendiente of pendientes) {     // mejor que un for 
    console.log(pendiente);  
}

for (let producto of carrito) {     // mejor que un for 
    console.log(producto.nombre);  
}