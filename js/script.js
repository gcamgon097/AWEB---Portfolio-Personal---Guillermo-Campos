/*Carrusel*/
// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {

  // Selecciona los proyectos por su ID y los guarda en un array
  var proyectos = [
    document.getElementById("pro1"),
    document.getElementById("pro2"),
    document.getElementById("pro3"),
    document.getElementById("pro4"),
    document.getElementById("pro5")
  ];

  // Guarda el índice del proyecto que se está mostrando actualmente
  var indiceActual = 0;

  // Función para mostrar solo el proyecto correspondiente al índice 
  function mostrarProyecto(indice) {
    proyectos.forEach(function(proyecto, i) {
      if (i === indice) {
        proyecto.classList.add("visible");   // Muestra el proyecto actual
      } else {
        proyecto.classList.remove("visible"); // Oculta los demás proyectos
      }
    });
  }

  // Botón para mostrar el siguiente proyecto
  document.querySelector(".porfolio__btn--next").addEventListener("click", function() {
    // Aumenta el índice y vuelve a 0 si llega al final (ciclo circular)
    indiceActual = (indiceActual + 1) % proyectos.length;
    mostrarProyecto(indiceActual);
  });

  // Botón para mostrar el proyecto anterior
  document.querySelector(".porfolio__btn--prev").addEventListener("click", function() {
    // Disminuye el índice y vuelve al último si llega al principio (ciclo circular)
    indiceActual = (indiceActual - 1 + proyectos.length) % proyectos.length;
    mostrarProyecto(indiceActual);
  });
});


/*Boton Claro Oscuro*/

// Selecciona el botón con el ID 'boton-clr-osc'
const cmb_clr_osc = document.getElementById('boton-clr-osc')

// Función que activa el modo oscuro
function enableDarkmode() {
  document.body.classList.add('darkmode')
}

// Función que desactiva el modo oscuro
function disableDarkmode() {
  document.body.classList.remove('darkmode')
}

// Evento que escucha el clic en el botón para alternar entre modo claro y oscuro
cmb_clr_osc.addEventListener("click", function() {
  // Alterna la clase al body 
  if (document.body.classList.contains('darkmode')) {
    disableDarkmode()
  } else {
    enableDarkmode()
  }
})


  