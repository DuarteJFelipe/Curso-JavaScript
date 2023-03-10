
//  Buenas practicas


const puntaje = 400;


// Codigo mas similar a la vida real 

function revisarPuntaje() {
    if (puntaje >= 400) {
        console.log("Puntaje Perfecto!!!");
        return;             // Funciona como un break
    }

    if (puntaje >= 300){
        console.log("Buen puntaje...");
        return;
    }
}

revisarPuntaje();


