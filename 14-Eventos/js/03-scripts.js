
const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", (evt) => {
    if (evt.target.value === "") {
        console.log("Fallo la validacion")
    }
});

busqueda.addEventListener("input", (evt) => {
    console.log(evt.target.value)
});

// busqueda.addEventListener("keyup", ()=>{
//     console.log("Escribiendo...");
// });

// busqueda.addEventListener("input", ()=>{
//     console.log("haciendo todo menos el blur");
// });