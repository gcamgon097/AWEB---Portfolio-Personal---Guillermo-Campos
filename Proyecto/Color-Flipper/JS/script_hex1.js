
/*1. Selecciono los elementos*/
const btn_cmb_hex = document.getElementById("boton"); /* Seleccionamos el boton para el cambio de color del fondo*/
const txt_clr_hex = document.querySelector(".color-box"); /* Seleccionamos el texto donde saldra el código hexadecimal del color que haya salido en el fondo */

/*2.Definimos la funcion.Esta funcion generara los colores aleatorios de forma que genere un código / valor hexadecimal aleatorio  */
function generar_color_hexa() {  
    const cdg_hexa = "0123456789ABCDEF";  /* Establezco los carácteres hexadecimales*/
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += cdg_hexa[Math.floor(Math.random() * 16)]; 
    }
    return color; /* Me devuelve el código / valor hexadecimal del  "color" */
}

/*3.LLamo a la funcion para que cuando haga click en el boton ("")*/

btn_cmb_hex.addEventListener("click", () => {  /* Con esto permito que al hacer click se genere un nuevo color */
    const nuevo_color = generar_color_hexa();
    document.body.style.backgroundColor = nuevo_color;
    texto_clr_hex.textContent = nuevo_color;
});