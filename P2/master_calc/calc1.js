
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
binary = document.getElementById("binary")
dec2 = document.getElementById("dec")
negative = document.getElementById("Negative")
abs = document.getElementById("absolute")
par1 = document.getElementById("par1")
par2 = document.getElementById("par2")
var oper_act = true;
var not_oper = true;
let n_par1 = 0;
let n_par2 = 0;

let digitos = document.getElementsByClassName("cdigito");
for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev)=>{
    oper_act = false;
    digito(ev.target);
  }
};
function digito(boton){
  if ((boton.value == "(")) {
    not_oper = false;
    n_par1 =+ 1;
  }else if ((boton.value == ")")) {
      not_oper = false;
      n_par2 =+ 1;
  }else {
    not_oper = false;
  }
  console.log(n_par2);
  console.log(n_par1);
  if (n_par2 <= n_par1) {
    if (display.innerHTML=="0") {
      display.innerHTML = boton.value;
    }else {
      display.innerHTML += boton.value;
    }
  }else {
    n_par2 = n_par2 - 1;
  }
  if ((boton.value == "(")) {
    oper_act = true;
    not_oper = true;
  }
}


//-- Insertar simbolo de sumar
suma.onclick = () => {
  if (!oper_act) {
      display.innerHTML += "+";
      oper_act = true;
    }
}

//-- Insertar simbolo de restar
resta.onclick = () => {
  if (!oper_act) {
      display.innerHTML += "-";
      oper_act = true;
    }
}

//--Insertar simbolo multiplicacion
producto.onclick = () => {
  if (!oper_act) {
      display.innerHTML += "*";
      oper_act = true;
    }
}

//--Insertar simbolo de división
division.onclick = () =>{
  if (!oper_act) {
      display.innerHTML += "/";
      oper_act = true;
    }
}
exponencial.onclick = () =>{
  if (!oper_act) {
      display.innerHTML += "**";
      oper_act = true;
    }
}

decimal.onclick = () =>{
  if (!oper_act) {
      display.innerHTML += ".";
      oper_act = true;
    }
}

clear.onclick = () => {
  n_par1 = 0;
  n_par2 = 0;
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

negative.onclick =() =>{
  display.innerHTML = display.innerHTML * (-1);
}
abs.onclick = () =>{
  if (display.innerHTML < 0) {
    display.innerHTML = display.innerHTML * (-1);
  }else {
    display.innerHTML = display.innerHTML;
  }
}

igual.onclick = () =>{
  console.log(n_par1);
  console.log(n_par2);
  if (n_par1 == n_par2) {
    n_par1 = 0;
    n_par2 = 0;
    display.innerHTML = eval(display.innerHTML);
  }
}
