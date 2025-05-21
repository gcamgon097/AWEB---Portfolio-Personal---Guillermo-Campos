/*Carrusel*/
// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

// Selecciona los proyectos por su ID y los guarda en un array
const proyectos = [
  document.getElementById("pro1"),
  document.getElementById("pro2"),
  document.getElementById("pro3"),
  document.getElementById("pro4"),
  document.getElementById("pro5")
];

// Guarda el índice del proyecto que se está mostrando actualmente
let indiceActual = 0;

// Función para mostrar solo el proyecto correspondiente al índice 
const mostrarProyecto = (indice) => {
  proyectos.forEach((proyecto, i) => {
    if (i === indice) {
      proyecto.classList.add("visible");   // Muestra el proyecto actual
    } else {
      proyecto.classList.remove("visible"); // Oculta los demás proyectos
    }
  });
};

// Botón para mostrar el siguiente proyecto
document.querySelector(".porfolio__btn--next").addEventListener("click", () => {
  // Aumenta el índice y vuelve a 0 si llega al final (ciclo circular)
  indiceActual = (indiceActual + 1) % proyectos.length;
  mostrarProyecto(indiceActual);
});

// Botón para mostrar el proyecto anterior
document.querySelector(".porfolio__btn--prev").addEventListener("click", () => {
  // Disminuye el índice y vuelve al último si llega al principio (ciclo circular)
  indiceActual = (indiceActual - 1 + proyectos.length) % proyectos.length;
  mostrarProyecto(indiceActual);
});
});


/*Boton Claro Oscuro*/
// Obtiene el valor guardado del modo oscuro desde el almacenamiento local del navegador
let darkmode = localStorage.getItem('darkmode')

// Selecciona el botón con el ID 'boton-clr-osc', que se usa para alternar el tema
const cmb_clr_osc = document.getElementById('boton-clr-osc')

// Función que activa el modo oscuro
const enableDarkmode = () => {
  // Agrega la clase 'darkmode' al <body>, lo que activa los estilos oscuros definidos en el CSS
  document.body.classList.add('darkmode')
  // Guarda el estado 'active' en el almacenamiento local para recordar que está en modo oscuro
  localStorage.setItem('darkmode', 'active')
}

// Función que desactiva el modo oscuro
const disableDarkmode = () => {
  // Elimina la clase 'darkmode' del <body>, volviendo al modo claro
  document.body.classList.remove('darkmode')
  // Borra el valor guardado en el almacenamiento local (se pone en null)
  localStorage.setItem('darkmode', null)
}

// Si al cargar la página el valor guardado en localStorage es "active", se activa automáticamente el modo oscuro
if(darkmode === "active") enableDarkmode()

// Evento que escucha el clic en el botón para alternar entre modo claro y oscuro
cmb_clr_osc.addEventListener("click", () => {
  // Se actualiza el valor de 'darkmode' desde el almacenamiento local
  darkmode = localStorage.getItem('darkmode')
  // Si no está activo, se activa el modo oscuro; si ya está activo, se desactiva
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

  