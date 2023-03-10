

// window.addEventListener("scroll",()=>{
//     const scrollPX = window.scrollY;

//     console.log(scrollPX);  // retorna el valor de scroll en pixeles
// });


window.addEventListener("scroll",()=>{
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 950) {
        console.log("El elemento ya es visible");
    }
});