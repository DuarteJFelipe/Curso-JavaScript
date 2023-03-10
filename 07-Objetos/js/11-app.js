const nombre = "Ipad";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)    // en vez de usar ${nombre} usamos ${this.nombre} porque si usamos el primero buscara la variable nombre fuera del objeto
    }
}


producto.mostrarInfo();