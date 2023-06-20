// //Creando localStorage
// localStorage.setItem("nombre", "Jose borrajo");
// localStorage.setItem("nombre2", "Carolina Sur");
// localStorage.setItem("nombre", "Roberto Rey");
// localStorage.setItem("edad", 40);

// //recuperando localstorage
// let nombre = localStorage.getItem("nombre");
// console.log("Mi nombre es: " + nombre);
// console.log("Mi nombre es: " + localStorage.getItem("nombre2"));

// //Sessionlocalstorage
// sessionStorage.setItem("nombre", "Jose Borrajo");
// sessionStorage.setItem("nombre2", "Carolina Sur");
// sessionStorage.setItem("nombre3", "Roberto Rey");
// sessionStorage.setItem("edad", "40");

// // Recuperando desde sessionStorage
// let nombre2 = sessionStorage.getItem("nombre");
// console.log("Mi nombre es: " + nombre2);
// console.log("Mi nombre es: " + sessionStorage.getItem("nombre2"));

// Viendo los tipos de datos
localStorage.setItem("nombre", "Nahuel Moreno");
localStorage.setItem("edad", 25);
localStorage.setItem("cine", true);
localStorage.setItem("bebidas", [
  { id: 1, nombre: "Fernet" },
  { id: 2, nombre: "Gin Tonic" },
]);
localStorage.setItem("datosPersonales", {
  dni: 2233445566,
  nombre: "Nahuel Moreno",
  email: "nahuelmoreno@gmail.com",
});

let valor = localStorage.getItem("pepe");
console.log(valor);
console.log(typeof valor);
