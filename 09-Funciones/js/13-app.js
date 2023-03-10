
//  Arrow Functions

const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando cancion con el id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist con el nombre de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo ${nombre}`),

    set setCancion(cancion){                              //========= Set Agrega valores=============
        this.cancion = cancion;                             //=========================================
        console.log(`Añadiendo ${cancion}`);                //======== Metodos de propiedad============
    },                                                      //=========================================
    get getCancion(){                                   //========== Get Obtiene Valores ==========
        console.log(`${this.cancion}`);
    }
}

reproductor.setCancion = "Gimple of us";
reproductor.getCancion;

reproductor.reproducir(30);

reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist("Only Feid");

reproductor.reproducirPlaylist("Only Feid");


