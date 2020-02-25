//-- Contador de clicks
console.log("Ejecutando JS...");

const display = document.getElementById("display");
const boton = document.getElementById("boton");

let cont = 0; // Let es crear una variable local.
              // En esta zona se crea una local pero al haber solo una zona
              // va a funcionar como una global.

boton.onclick = () => {
  console.log("Click!");
  cont += 1;
  //display.innerHTML = cont;  // Si usamo esta comentar la de abajo.
  display.innerHTML += " " + cont; //Para poner todo lo que había
                                  //antes debemos poner un + antes del cont;
}
