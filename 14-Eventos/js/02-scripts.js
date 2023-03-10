
const nav = document.querySelector(".navegacion");

// Registrar evento
nav.addEventListener("mouseenter",() => {
    console.log("entrando en la navegacion");
});

nav.addEventListener("mouseout",() => {
    console.log("saliendo en la navegacion");
    nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mousedown",() => {
    nav.style.backgroundColor = "white";
});

// mousedown - similar al click
// click
// dbclick - doble click
// mouseup - cuando sueltas el mouse