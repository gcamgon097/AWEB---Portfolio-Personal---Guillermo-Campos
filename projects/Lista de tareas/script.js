const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('nueva-tarea');
const lista = document.getElementById('lista-tareas');

// Añade un evento al formulario que se activa cuando se hace submit (al hacer clic en "Agregar tarea")
formulario.addEventListener('submit', function (evento) {
  
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario

  // Obtiene el texto escrito, eliminando espacios al principio y al final
  const texto = inputTarea.value.trim();// .trim() elimina espacios al inicio y al final del texto para evitar poner una tarea vacia

  // Solo continúa si el input no está vacío
  if (texto !== '') {

    // Crea un nuevo elemento <li> para agregarlo a la lista
    const item = document.createElement('li');
    item.textContent = texto; // Le pone el texto de la tarea

    // Crea un botón "X" para eliminar la tarea
    const boton = document.createElement('button');
    boton.textContent = 'X'; // El texto del botón es "X"
    boton.classList.add('boton-eliminar'); // Se le asigna una clase para aplicarle estilos

    // Añade un evento al botón que elimina el <li> completo al hacer clic
    boton.addEventListener('click', () => item.remove());

    // Agrega el botón al elemento <li>
    item.appendChild(boton);

    // Agrega la tarea completa (li + botón) al <ul> de tareas
    lista.appendChild(item);

    // Limpia el input para que el usuario pueda escribir otra tarea
    inputTarea.value = '';
  }
});
