// Obtenemos la pantalla de la calculadora y todos los botones
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

// Variables para guardar el estado actual de la operación
let operacionActual = "";
let reiniciarPantalla = false;

// Recorremos todos los botones y les añadimos un evento de clic
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valor = boton.getAttribute("data-valor");

    // Si se presiona "C", limpiamos todo
    if (valor === "C") {
      operacionActual = "";
      pantalla.textContent = "0";
      return;
    }

    // Si se presiona "=", evaluamos la operación
    if (valor === "=") {
      try {// Intenta evaluar la operación. Si hay error, salta al catch.
        // Usamos eval para calcular la operación
        operacionActual = eval(operacionActual).toString();
        pantalla.textContent = operacionActual;
        reiniciarPantalla = true;
      } catch {
        // Si hay un error de sintaxis, mostramos "Error"
        pantalla.textContent = "Error";
        operacionActual = "";
      }
      return;
    }

    // Si se debe reiniciar la pantalla luego de presionar "="
    if (reiniciarPantalla) {
      operacionActual = "";
      reiniciarPantalla = false;
    }

    // Si la pantalla está en 0 y no estamos escribiendo un punto decimal, reemplazamos el 0
    if (pantalla.textContent === "0" && valor !== ".") {
      pantalla.textContent = valor;
    } else {
      pantalla.textContent += valor;
    }

    // Concatenamos el valor presionado a la operación actual
    operacionActual += valor;
  });
});
