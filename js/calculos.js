const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return; //con return termianmos la ejecucion siguiente
    }
    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        pantalla.textContent = "0"; //si el tamaño del arreglo es 1 cuando borramos queda en 0
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1); //saca la ultima posicion del arreglo -1
      }
      return;
    }
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent); //eval nos sirve para ver si en una cadena hay opercaciones matematicas
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }
    if (
      pantalla.textContent === "0" ||
      pantalla.textContent === "Error"
    ) {
      /*Remplaza el 0 en pantalla al inicio*/
      pantalla.textContent = botonApretado;
    } else {
      /*concatena los caracteres de la calculadora*/
      pantalla.textContent += botonApretado;
    }
  });
});
