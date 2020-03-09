
display = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
producto = document.getElementById("producto")
division = document.getElementById("division")
decimal = document.getElementById("decimal")
exponencial = document.getElementById("exponencial")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
borrar = document.getElementById("del")

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
exponencial.onclick = () =>{
  display.innerHTML += "**";
}

decimal.onclick = () =>{
  display.innerHTML += ".";
}

clear.onclick = () => {
  display.innerHTML = "0";
}
link.onclick = () => {
  display.innerHTML = "0";
}
borrar.onclick = () =>{
  var length = display.innerHTML.length;
  //display.innerHTML = "0";
  if (display.innerHTML.length > 1) {
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length - 1);
  }else if (display.innerHTML.length = 1) {
    display.innerHTML = "0";
  }
}

igual.onclick = () =>{
  display.innerHTML = eval(display.innerHTML);
}
