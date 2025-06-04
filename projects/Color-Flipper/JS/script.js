// Lista de colores predefinidos
const colores = [
  "red", "mediumaquamarine", "yellow", "navy", "salmon", "greenyellow", "plum",
  "lightcoral", "orange", "coral", "brown", "skyblue"
];

// Obtiene el botón para cambiar color
const btn_Cmb = document.getElementById("boton");

// Selecciona el contenedor de color
const color_caja = document.querySelector(".color-box");

// Selecciona el elemento <span> donde se mostrará el color
const txt_color = color_caja.querySelector("span");

// Al hacer clic, se selecciona y aplica un color aleatorio del array
btn_Cmb.addEventListener("click", function () {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Color al azar
  document.body.style.backgroundColor = colorAleatorio; // Aplica al fondo
  txt_color.textContent = colorAleatorio; // Muestra el nombre del color
});
