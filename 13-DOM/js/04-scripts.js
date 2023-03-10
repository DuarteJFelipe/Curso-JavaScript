
// querySelector solo retorna el primer .card que encuentre
const card = document.querySelector(".card");
console.log(card);
 

// Podemos tener selectores especificos como en css
const info = document.querySelector(".premium .info");
console.log(info);

const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log(segundoCard);

// seleccionar por id
const formulario = document.querySelector("#formulario");
console.log(formulario);

// seleccionar por etiqueta
const navegacion = document.querySelector("nav");
console.log(navegacion);

