// Selecciona la pantalla donde se muestra la operación
const pantalla = document.getElementById("pantalla");

// Selecciona todos los botones de la calculadora
const botones = document.querySelectorAll(".btn");

// Variables para guardar estado actual
let operacionActual = "";        // Almacena la operación a evaluar
let reiniciarPantalla = false;  // Bandera para reiniciar tras "="

// Recorre cada botón y agrega un evento al hacer clic
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const valor = boton.getAttribute("data-valor"); // Valor del botón

    // Si el botón es "C", resetea todo
    if (valor === "C") {
      operacionActual = "";
      pantalla.textContent = "0";
      return;
    }

    // Si el botón es "=", evalúa la operación
    if (valor === "=") {
      try {
        operacionActual = eval(operacionActual).toString(); // Evalúa y convierte a string
        pantalla.textContent = operacionActual; // Muestra resultado
        reiniciarPantalla = true; // Marca que debe reiniciarse
      } catch {
        pantalla.textContent = "Error"; // Si hay error de sintaxis
        operacionActual = "";
      }
      return;
    }

    // Si hay que reiniciar pantalla tras "="
    if (reiniciarPantalla) {
      operacionActual = "";
      reiniciarPantalla = false;
    }

    // Si pantalla muestra solo "0", reemplazarlo salvo que sea "."
    if (pantalla.textContent === "0" && valor !== ".") {
      pantalla.textContent = valor;
    } else {
      pantalla.textContent += valor; // Concatenar nuevos valores
    }

    // Agrega el valor a la cadena de operación
    operacionActual += valor;
  });
});
