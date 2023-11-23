const contenedorTarjeta = document.getElementById("carrito-container");
const cuentaCarritoE = document.getElementById("cuenta-carrito");

/** TARJETAS AGREGADAS AL CARRITO */

function crearTarjetasCarrerasCarro() {
    // contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("carreras"));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevaCarrera = document.createElement("div");
            nuevaCarrera.classList = "tarjeta-carrito";
            nuevaCarrera.innerHTML = `
                <img src="./img/carreras/${producto.id}.jpg" alt="carrera 1">
                <h3>${producto.nombre}</h3>
                <h3>${producto.distancia}</h3>
                <p class="precio">$${producto.precio}</p>
                <div>
                    <button class="bton"><i class="bi bi-trash3"></i> </button>
                </div>
            `;
            contenedorTarjeta.appendChild(nuevaCarrera);

            // nuevaCarrera
            //     .getElementsByTagName("button")[1]
            //     .addEventListener("click", () => {
            //         restarDelCarrito(productos[index]);
                    actualizarCarrito();
            //     });
        });


    };
}

crearTarjetasCarrerasCarro(); 

function agregarAlCarrito(producto) {
    let stock = localStorage.getItem('carreras');
    let cantidadFinal;
    console.log(stock);
    if (!stock || stock.length === 0) {
        const nuevoProducto = almacenaNuevoProducto(producto);
        localStorage.setItem('carreras', JSON.stringify([nuevoProducto]));
        actualizarCarrito();
        cantidadFinal = 1;
    } else {
        stock = JSON.parse(stock);

        const indiceProducto = stock.findIndex(item => item.id === producto.id);
        const newstock = stock;

        if (indiceProducto === -1) {
            const nuevoProducto = almacenaNuevoProducto(producto)
            newstock.push(nuevoProducto);
            cantidadFinal = 1;           

        } else {

            newstock[indiceProducto].cantidad++;
            cantidadFinal = newstock[indiceProducto].cantidad;
        }

        localStorage.setItem('carreras', JSON.stringify(newstock));
    }
    actualizarCarrito();
    // return cantidadFinal
}

function almacenaNuevoProducto(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


function actualizarCarrito() {

    const stock = JSON.parse(localStorage.getItem('carreras')) || [];
    const cuenta = stock.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoE.innerText = cuenta;
}
actualizarCarrito();

// // function restarDelCarrito(producto) {
// //     let stock = JSON.parse(localStorage.getItem('carreras')) || [];

// //     const indiceProducto = stock.findIndex(item => item.producto === producto);

// //     if (indiceProducto !== -1) {
// //         if (stock[indiceProducto].cantidad > 1) {
// //             stock[indiceProducto].cantidad--;
// //         } else {

// //             stock.splice(indiceProducto, 1);
// //         }

// //         localStorage.setItem('carreras', JSON.stringify(stock));
// //     }
// // }

// // function actualizarCarrito() {
// //     // Fetch the current cart data from local storage
// //     const dataCar = JSON.parse(localStorage.getItem('carreras')) || [];
// //     const cuenta = dataCar.reduce((acum, current) => acum + current.cantidad, 0);
// //     cuentaCarritoE.innerText = cuenta;
// // }
// // actualizarCarrito();



// // // (async () => {
// // //     const url = 'https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en';
// // //     const options = {
// // //         method: 'GET',
// // //         headers: {
// // //             'X-RapidAPI-Key': 'YOUR-RAPIDAPI-KEY',
// // //             'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
// // //         }
// // //     };

// // //     try {
// // //         const response = await fetch(url, options);
// // //         const result = await response.text();
// // //         console.log(result);
// // //     } catch (error) {
// // //         console.error(error);
// // //     }
// // // })();








