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
        id: "anillo 01",
        titulo: "Anillo corazon de acero",
        imagen: "img/Anillos/Anillo corazon de acero quirurgico con dije.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 03",
        titulo: "Anillo de acero dorado",
        imagen: "img/Anillos/Anillo de acero dorado.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 04",
        titulo: "Anillo de acero quirurgico",
        imagen: "img/Anillos/Anillo de acero quirurgico.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 05",
        titulo: "Anillo mariposa de acero quirurgico",
        imagen: "img/Anillos/Anillo mariposa de acero quirurgico con dije.jpg",
        categoria: { 
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo 06",
        titulo: "Anillo san benito de acero quirurgico",
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
        titulo: "Argollas cuadradas de acero quirurgico",
        imagen: "img/Aros/Argollas cuadradas de acero quirurgico.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 02",
        titulo: "Argollas de acero blanco con strass",
        imagen: "img/Aros/Argollas de acero blanco con strass.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2600
    },
    {
        id: "aro 03",
        titulo: "Argollas de acero blanco",
        imagen: "img/Aros/Argollas de acero blanco.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 04",
        titulo: "Argollas de acero dorado",
        imagen: "img/Aros/Argollas de acero dorado anchas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 3000
    },
    {
        id: "aro 05",
        titulo: "Argollas de acero dorado",
        imagen: "img/Aros/Argollas de acero dorado pequeñas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 06",
        titulo: "Argollas de acero dorado",
        imagen: "img/Aros/Argollas de acero dorado.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 1500
    },
    {
        id: "aro 07",
        titulo: "Argollas de acero quirurgico",
        imagen: "img/Aros/Argollas de acero quirurgico con strass.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2600
    },
    {
        id: "aro 08",
        titulo: "Argollas de acero quirurgico",
        imagen: "img/Aros/Argollas de acero quirurgico pequeñas.jpg",
        categoria: { 
            nombre: "Aros",
            id: "aros"
        },
        precio: 2000
    },
    {
        id: "aro 09",
        titulo: "Aros de gotitas dorado",
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
        titulo: "Cadena de acero blanco con dije",
        imagen: "img/Cadenas/Cadena de acero blanco con dije.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 5000
    },
    {
        id: "cadena 02",
        titulo: "Cadena de acero blanco con inicial",
        imagen: "img/Cadenas/Cadena de acero blanco con inicial.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 6000
    },
    {
        id: "cadena 03",
        titulo: "Cadena de acero blanco con inicial",
        imagen: "img/Cadenas/Cadena de acero blanco quirurgico con inicial.jpg",
        categoria: { 
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 5000
    },
    {
        id: "cadena 04",
        titulo: "Cadena de acero blanco con dije",
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
        titulo: "Brazalete de acero quirurgico",
        imagen: "img/Pulseras/Brazalete de acero quirurgico con brillo.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:5000
    },
    {
        id: "pulsera 02",
        titulo: "Pulsera de acero quirurgico",
        imagen: "img/Pulseras/Pulsera de acero quirurgico plateada.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 03",
        titulo: "Pulsera de acero quirurgico",
        imagen: "img/Pulseras/Pulsera de acero quirurgico.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 04",
        titulo: "Pulsera de cuentas de vidrio",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio celeste.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 05",
        titulo: "Pulsera de cuentas negras",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio negra.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 06",
        titulo: "Pulsera de cuentas de vidrio",
        imagen: "img/Pulseras/Pulsera de cuentas de vidrio transparente.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:3000
    },
    {
        id: "pulsera 07",
        titulo: "Pulsera de cuentas negra",
        imagen: "img/Pulseras/Pulsera de cuentas negra.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 3000
    },
    {
        id: "pulsera 08",
        titulo: "Pulsera esclava de acero",
        imagen: "img/Pulseras/Pulsera esclava de acero blanco.jpg",
        categoria: { 
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio:5000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {

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
}

cargarProductos();