
const pendientes = ["Tarea","Comer","Proyecto","Estudiar"];

const automovil = {  
    modelo: "Camaro",
    year: 1969,
    motor: "6.0"
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (let propiedad in automovil) {   //Itera sobre objetos
    console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) { // izquierda derecha
    console.log(llave);
}