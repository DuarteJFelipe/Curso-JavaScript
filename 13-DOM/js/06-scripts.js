

const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado)



console.log(encabezado.innerText);  // Trae solo el texto - pero si en el css visibility : hidden; no lo va a encontrar

console.log(encabezado.textContent);  // Trae solo el texto

console.log(encabezado.innerHTML);  // Trae el html



document.querySelector(".contenido-hero h1").textContent = "Nuevo heading";


const nuevoHeading = "Nuevo heading 2"
document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

// Cambiar imagen con el  .src
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer3.jpg"