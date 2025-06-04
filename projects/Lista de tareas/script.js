// Obtiene el formulario donde se escriben las tareas
const formulario = document.getElementById('formulario-tarea');

// Input donde se escribe el nombre de la nueva tarea
const inputTarea = document.getElementById('nueva-tarea');

// Lista (ul) donde se añadirán las tareas (li)
const lista = document.getElementById('lista-tareas');

// Evento que se dispara al enviar el formulario
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // Evita que se recargue la página

  // Obtiene y limpia el valor ingresado en el input
  const texto = inputTarea.value.trim();

  // Solo se procede si el input no está vacío
  if (texto !== '') {
    // Crea un nuevo elemento de lista
    const item = document.createElement('li');
    item.textContent = texto; // Asigna el texto de la tarea

    // Crea un botón "X" para eliminar la tarea
    const boton = document.createElement('button');
    boton.textContent = 'X'; // Texto del botón
    boton.className = 'boton-eliminar'; // Clase para estilos

    // Evento para eliminar la tarea (eliminar el <li>)
    boton.addEventListener('click', function () {
      lista.removeChild(item); // Elimina la tarea de la lista
    });

    // Agrega el botón al <li>
    item.appendChild(boton);

    // Agrega el <li> completo a la lista
    lista.appendChild(item);

    // Limpia el input para la siguiente tarea
    inputTarea.value = '';
  }
});
