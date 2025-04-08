/*1.Selecciono los 20 colores que quiero que cuando haga click se seleccione uno */
const colores = [
    "red", "mediumaquamarine", "yellow", "navy", "salmon", "greenyellow", "plum", 
    "lightcoral", "orange", "coral", "brown", "skyblue"
];

/*2. Selecciono los elementos de mi html ("index.html") */
const btn_Cmb = document.getElementById("boton");  /*ID del botón*/ 
const color_caja = document.querySelector(".color-box"); /*La caja donde se mostrará el color*/
const txt_color = color_caja.querySelector("span");  /*El span donde se actualizará el color*/


/*3.Definimos y llamamos al boton  que se ejecutará al hacer click en el botón sin necesidad de una función previamente definida*/
btn_Cmb.addEventListener("click", () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];/*Se selecciona un color aleatorio de la lista "colores"*/
    document.body.style.backgroundColor = colorAleatorio;  /*Se cambia el color del fondo por el color que se ha seleccionado antes en "colorAleatorio"*/
    txt_color.textContent = colorAleatorio;  /*Muestra el color seleccionado en el span*/
});
