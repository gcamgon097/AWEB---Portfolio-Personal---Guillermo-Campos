// Selecciona el botón por su ID
const btn_cmb_hex = document.getElementById("boton");

// Selecciona el cuadro de texto donde se mostrará el color
const texto_clr_hex = document.querySelector(".color-box");

// Función que genera un color hexadecimal aleatorio
function generar_color_hexa() {
  const cdg_hexa = "0123456789ABCDEF"; // Caracteres HEX
  let color = "#"; // Empieza con '#'
  for (let i = 0; i < 6; i++) {
    color += cdg_hexa[Math.floor(Math.random() * 16)]; // Añade caracteres aleatorios
  }
  return color; // Devuelve color generado
}

// Evento click en el botón para cambiar el color
btn_cmb_hex.addEventListener("click", function () {
  const nuevo_color = generar_color_hexa(); // Llama la función
  document.body.style.backgroundColor = nuevo_color; // Cambia fondo
  texto_clr_hex.textContent = nuevo_color; // Muestra código generado
});
