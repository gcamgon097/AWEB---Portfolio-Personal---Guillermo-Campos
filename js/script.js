/*Carrusel*/
/*Espera a que el contenido del DOM esté completamente cargado*/

/* Selección de elementos del carrusel en el DOM */
const carru = document.querySelector('.porfolio__car'); 
const items = document.querySelectorAll('.porfolio__itm');
const prevBtn = document.querySelector('.porfolio__btn--prev'); 
const nextBtn = document.querySelector('.porfolio__btn--next');

console.log(items);
/*Estado del carrusel */
let indiceActual = 0; // Índice del proyecto que se está mostrando
const totalProyectos = items.length; // Número total de proyectos en el carrusel

/*Función que actualiza la posición del carrusel*/
function actualizarCarrusel() {
  const desplazamiento = -indiceActual * 100; // Calcula el desplazamiento en %
  carru.style.transform = `translateX(${desplazamiento}%)`; // Aplica transformación al contenedor
}

/*Evento para botón "Anterior"*/
prevBtn.addEventListener('click', () => {
  indiceActual = (indiceActual - 1 + totalProyectos) % totalProyectos; // Mueve al anterior (cíclico)
  console.log(indiceActual);
  console.log(items[indiceActual]);
  actualizarCarrusel();
  //Investigar claslist y funcion toogle*/
});

/*Evento para botón "Siguiente" */
nextBtn.addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % totalProyectos; // Mueve al siguiente (cíclico)
  console.log(indiceActual);
  console.log(items[indiceActual]);
  actualizarCarrusel();
});


/*Inicializa el carrusel mostrando el primer proyecto*/
actualizarCarrusel();

/*Boton Claro Oscuro*/
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('boton-clr-osc')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

  