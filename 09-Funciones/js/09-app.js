
// Funciones en objetos

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id: ${id}`);
    },
    pausar: function() {
        console.log(`Pausando...`)
    }
}

reproductor.reproducir(30);        // Metodos de propiedad

reproductor.pausar();

reproductor.borrar = function (id) {
    console.log(`Borrando cancion con el id: ${id}`);
}

reproductor.crearPlaylist = function(nombre){
    console.log(`Creando playlist con el nombre de ${nombre}`);
}

reproductor.reproducirPlaylist = function(nombre){
    console.log(`Reproduciendo ${nombre}`);
}
reproductor.borrar(30);

reproductor.crearPlaylist("Only Feid");

reproductor.reproducirPlaylist("Only Feid");

