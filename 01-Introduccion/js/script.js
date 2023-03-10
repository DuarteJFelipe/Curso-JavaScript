// alert('Hola Mundo');

// pregunta al usuario su nombre y lo asigna a la variable nombre 
const nombre = prompt('Cual es tu nombre?')

// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript moderno`;

// Envia un mensaje de error a la consola
console.error('Algo salio mal');