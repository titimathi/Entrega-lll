const contenedorTarjetas = document.getElementById("productos-container");
const carrito = document.getElementById("cuenta-carrito");
const eliminarCarrito = document.getElementById("vaciar_carrito");

function crearTarjetasCarreras(productos){
    productos.forEach(producto => {
        const nuevaCarrera = document.createElement("div");
        nuevaCarrera.classList = "tarjeta-producto"
        nuevaCarrera.innerHTML =`
        <img src="./img/carreras/${producto.id}.jpg" alt="carrera 1">
        <h3>${producto.nombre}</h3>
        <h3>${producto.distancia}</h3>
        <p class="precio">$${producto.precio}</p>
        <button>Agregar al carrito</button>`
        contenedorTarjetas.appendChild(nuevaCarrera);
        nuevaCarrera.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
    });
}
crearTarjetasCarreras(carreras);

function agregarAlCarrito(producto){
    const stock = localStorage.getItem('carreras');
    console.log(stock)
    if (!stock){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem('carreras', JSON.stringify([nuevoProducto]));
    } else {
        stock = JSON.parse(stock);
        const existeProducto = stock.find(item => item.id === producto.id);

        if (existeProducto) {
            
            existeProducto.cantidad++;
        } else {
            
            stock.push({ ...producto, cantidad: 1 });
        }

        localStorage.setItem('carreras', JSON.stringify(stock));
    }
}



