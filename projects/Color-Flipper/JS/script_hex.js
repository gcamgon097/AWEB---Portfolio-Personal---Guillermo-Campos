// Selecciona el botón por su ID
const boton_cambio_hex = document.getElementById("boton");

// Selecciona el texto donde se mostrará el color hexadecimal
const texto_color_hex = document.querySelector(".color");

// Función que genera un color hexadecimal aleatorio
function generar_color_hex() {
  const caracteres = "0123456789ABCDEF"; // Caracteres válidos en hex
  let color = "#"; // Comienza con '#'
  for (let i = 0; i < 6; i++) {
    // Añade 6 caracteres al azar
    color += caracteres[Math.floor(Math.random() * 16)];
  }
  return color; // Devuelve el color generado
}

// Evento que se ejecuta al hacer clic en el botón
boton_cambio_hex.addEventListener("click", function () {
  const nuevo_color = generar_color_hex(); // Genera nuevo color
  document.body.style.backgroundColor = nuevo_color; // Cambia color de fondo
  texto_color_hex.textContent = nuevo_color; // Muestra el código en pantalla
});
