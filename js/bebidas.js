const productos = [
  {
    id: 1,
    nombre: "Nike Dunk High Retro SE",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/531956-800-800?v=638161386415270000&width=800&height=800&aspect=true",
    precio: 74.999,
  },
  {
    id: 2,
    nombre: "Air Jordan 1 Mid SE",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/454453-800-800?v=638149309826970000&width=800&height=800&aspect=true",
    precio: 79.999,
  },
  {
    id: 3,
    nombre: "Nike Terminator High OG",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/455853-800-800?v=638149332164630000&width=800&height=800&aspect=true",
    precio: 84.999,
  },
  {
    id: 4,
    nombre: "Air Jordan 3 Retro",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/155919-800-800?v=638086284798630000&width=800&height=800&aspect=true",
    precio: 109.999,
  },
];

function guardarProductosLS() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
  return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();

function renderProductos() {
  let productos = cargarProductosLS();
  let contenido = "";

  productos.forEach((producto) => {
    contenido += `<div class="col-md-3">
        <div class="card text-center ">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <p class="card-text text-black"><b>$${producto.precio}</b></p>
            <p>${producto.nombre}</p>
            <p><button class="btn btn-secondary " onClick="verProducto(${producto.id});">Ver Producto</button></p>
        </div>
      </div>
      </div>`;
  });

  document.getElementById("contenido").innerHTML = contenido;
}

function verProducto(id) {
  //2
  let productos = cargarProductosLS();
  let producto = productos.find((item) => item.id == id);
  localStorage.setItem("producto", JSON.stringify(producto));
  location.href = "ver-productos.html"; //Redireccionar a la página pasada por parámetro
}

renderProductos();
