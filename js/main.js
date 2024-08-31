// PRODUCTOS
const productos = [
    // ANILLOS  
    {
        id: "anillo 01",
        titulo: "Anillo corazon dorado",
        imagen: "img/Anillos/Anillo corazon de acero dorado.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 4000
    },
    {
        id: "anillo 02",
        titulo: "Anillo corazon acero",
        imagen: "img/Anillos/Anillo corazon de acero quirurgico con dije.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 03",
        titulo: "Anillo acero dorado",
        imagen: "img/Anillos/Anillo de acero dorado.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 04",
        titulo: "Anillo de acero ",
        imagen: "img/Anillos/Anillo de acero quirurgico.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 05",
        titulo: "Anillo mariposa acero",
        imagen: "img/Anillos/Anillo mariposa de acero quirurgico con dije.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 06",
        titulo: "Anillo san benito",
        imagen: "img/Anillos/Anillo san benito de acero quirurgico.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 5000
    },
    // AROS
    {
        id: "aro 01",
        titulo: "Argollas cuadradas",
        imagen: "img/Aros/Argollas cuadradas de acero quirurgico.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 02",
        titulo: "Argollas con strass",
        imagen: "img/Aros/Argollas de acero blanco con strass.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2600
    },
    {
        id: "aro 03",
        titulo: "Argollas de acero",
        imagen: "img/Aros/Argollas de acero blanco.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 04",
        titulo: "Argollas acero dorado",
        imagen: "img/Aros/Argollas de acero dorado anchas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 3000
    },
    {
        id: "aro 05",
        titulo: "Argollas acero dorado",
        imagen: "img/Aros/Argollas de acero dorado pequeñas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 06",
        titulo: "Argollas acero dorado",
        imagen: "img/Aros/Argollas de acero dorado.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 1500
    },
    {
        id: "aro 07",
        titulo: "Argollas de acero",
        imagen: "img/Aros/Argollas de acero quirurgico con strass.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2600
    },
    {
        id: "aro 08",
        titulo: "Argollas de acero",
        imagen: "img/Aros/Argollas de acero quirurgico pequeñas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 09",
        titulo: "Aros gotitas dorado",
        imagen: "img/Aros/Aros de gotitas de acero dorado.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 3000
    },
    {
        id: "aro 10",
        titulo: "Aros estrellas dorado",
        imagen: "img/Aros/Aros estrellas de acero dorado.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 1500
    },
    // CADENAS
    {
        id: "cadena 01",
        titulo: "Cadena con dije",
        imagen: "img/Cadenas/Cadena de acero blanco con dije.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 5000
    },
    {
        id: "cadena 02",
        titulo: "Cadena con inicial",
        imagen: "img/Cadenas/Cadena de acero blanco con inicial.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 6000
    },
    {
        id: "cadena 03",
        titulo: "Cadena con inicial",
        imagen: "img/Cadenas/Cadena de acero blanco quirurgico con inicial.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 5000
    },
    {
        id: "cadena 04",
        titulo: "Cadena con dije",
        imagen: "img/Cadenas/Cadena de strass con dije.jpg ",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 7000
    },
    // PULSERAS
    {
        id: "pulsera 01",
        titulo: "Brazalete de acero",
        imagen: "img/Pulseras/Brazalete de acero quirurgico con brillo.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:5000
    },
    {
        id: "pulsera 02",
        titulo: "Pulsera de acero",
        imagen: "img/Pulseras/Pulsera de acero quirurgico plateada.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 03",
        titulo: "Pulsera de acero",
        imagen: "img/Pulseras/Pulsera de acero quirurgico.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 04",
        titulo: "Pulsera de cuentas",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio celeste.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 05",
        titulo: "Pulsera de cuentas",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio negra.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 06",
        titulo: "Pulsera de cuentas",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio transparente.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 07",
        titulo: "Pulsera de cuentas",
        imagen: "img/Pulseras/Pulsera de cuentas negra.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3000
    },
    {
        id: "pulsera 08",
        titulo: "Pulsera esclava",
        imagen: "img/Pulseras/Pulsera esclava de acero blanco.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:5000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}