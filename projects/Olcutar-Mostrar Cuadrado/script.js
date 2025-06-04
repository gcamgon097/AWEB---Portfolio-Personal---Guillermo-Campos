// Función que alterna la visibilidad de una caja
function toggleBox() {
  // Selecciona la caja que se quiere mostrar u ocultar
  const caja = document.getElementById("caja");

  // Selecciona el botón que se utiliza para cambiar el estado de la caja
  const boton = document.getElementById("boton");

  // Si la caja tiene la clase "oculta", se la quitamos y cambiamos el texto del botón
  if (caja.classList.contains("oculta")) {
    caja.classList.remove("oculta");
    boton.textContent = "Ocultar caja"; // Cambia texto a "Ocultar"
  } else {
    // Si la caja no está oculta, la ocultamos y cambiamos el texto del botón
    caja.classList.add("oculta");
    boton.textContent = "Mostrar caja"; // Cambia texto a "Mostrar"
  }
}

// Añade el evento click al botón para ejecutar la función toggleBox
document.getElementById("boton").addEventListener("click", toggleBox);
