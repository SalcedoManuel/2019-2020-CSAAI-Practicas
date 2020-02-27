
display = document.getElementById("display")
result = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
producto = document.getElementById("producto")
division = document.getElementById("division")
decimal = document.getElementById("decimal")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
borrar = document.getElementById("Del")

let digitos = document.getElementsByClassName("cdigito");
for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
};
function digito(boton)
{
  if (display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else {
    display.innerHTML += boton.value;
  }
}
//-- Insertar decimal

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Insertar simbolo de restar
resta.onclick = () => {
  display.innerHTML += "-";
}

//--Insertar simbolo multiplicacion
producto.onclick = () => {
  display.innerHTML += "*";
}

//--Insertar simbolo de división
division.onclick = () =>{
  display.innerHTML += "/";
}
porcentaje.onclick = () =>{
  display.innerHTML += "%";
}
clear.onclick = () => {
  display.innerHTML = "0";
}
borrar.onclick = () =>{
  console.log("Numero:");
  console.log(display.innerHTML);
  result.innerHTML = display.innerHTML;
  console.log("Cifras Bucle");
  var max = result.innerHTML.legth;
  console.log(max);
  for (var i = 0; i < 3; i++) {
    display.innerHTML[i];
    result.innerHTML;
    display.innerHTML =+ result.innerHTML[i];
      console.log("Valor de i: ");
      console.log(i);
      console.log("Numero Cifras Bucle: ");
      console.log(result.innerHTML.length);
  }
  console.log("Numero Cifras: ");
  console.log(result.innerHTML.length);
  console.log("Nuevo Numero:");
  console.log(result.innerHTML);
}

igual.onclick = () =>{
  display.innerHTML = eval(display.innerHTML);
}
