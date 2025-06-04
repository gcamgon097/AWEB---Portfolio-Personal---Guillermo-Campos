// Array que contiene frases motivacionales y divertidas relacionadas con la programación e informática
const frasesFrikisInformatica = [
  "Los programadores no tienen errores, solo experiencias inesperadas.",
  "La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.",
  "En la informática, el único límite es la imaginación (y la memoria RAM).",
  "Los programadores no duermen, solo hacen pausas de ejecución.",
  "La mejor forma de resolver un problema es dividirlo en problemas más pequeños.",
  "Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.",
  "En la programación, cada punto y coma cuenta.",
  "El código es como el vino: mejora con el tiempo (y las revisiones).",
  "La resolución de problemas es la habilidad más importante en la programación.",
  "La informática es como una montaña rusa: emocionante y llena de giros inesperados.",
  "Los programadores no necesitan superpoderes, tienen lenguajes de programación.",
  "Los programadores no tienen miedo al cambio, solo a los cambios de última hora.",
  "La programación es como un juego de ajedrez: cada movimiento tiene consecuencias.",
  "Los bugs son como las malas hierbas: siempre aparecen cuando menos los esperas.",
  "La programación es como construir castillos de arena: a veces, el mar se lleva tu trabajo.",
  "La programación es como una sinfonía: cada línea de código es una nota en la partitura del software.",
  "La programación es como una maratón mental: requiere resistencia, concentración y determinación."
];

// Referencia al botón que el usuario pulsará
const btn = document.getElementById('btn-frase');

// Referencia al párrafo donde se mostrará la frase
const pFrase = document.getElementById('frase');

// Evento click en el botón para mostrar una frase aleatoria
btn.addEventListener('click', function () {
  // Se genera un índice aleatorio del array de frases
  const randomIndex = Math.floor(Math.random() * frasesFrikisInformatica.length);
  
  // Se muestra la frase correspondiente al índice generado
  pFrase.textContent = frasesFrikisInformatica[randomIndex];

  // Si el texto del botón aún no se cambió, se cambia a "Ver más contenido"
  if (btn.textContent !== 'Ver más contenido') {
    btn.textContent = 'Ver más contenido';
  }
});
