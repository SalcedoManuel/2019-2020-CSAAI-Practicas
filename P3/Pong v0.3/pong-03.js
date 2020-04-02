console.log("Ejecutando JS...");

//--  Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//--Variables para la Bola
let bola_x = 50;
let bola_vx = 0;

//-- Pintar todos los objetos en el canvas
function draw() {
  //-- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white'
  ctx.rect(bola_x, 200, 10, 10);
  ctx.fill();

  //--Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';
  //--Raqueta Izquierda
  ctx.rect(50, 100, 10, 40);
  //--Raqueta Derecha
  ctx.rect(550,300,10,40);
  ctx.fill();


  //--Dibujar la red
  ctx.beginPath();

  //-- Estilo de la línea: discontinua
  //-- Trazos de 10 pixeles
  ctx.setLineDash([10,10]);
  ctx.strokeStyle ='white';
  ctx.lineWidth = 2;
  //--Ponemos en la mitad del tablero
  ctx.moveTo(canvas.width/2, 0);
  //--Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //---Tanteo
  ctx.font ="100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("0", 200, 80);
  ctx.fillText("1", 340, 80);
}

//-- Bucle principal de la animación
function animacion()
{
  if(bola_x >= canvas.width) {
    bola_vx = bola_vx * -1;
  }
  //-- Incrementar la posicion x de la bola
  bola_x += bola_vx;
  //--Borrar el canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

setInterval(()=>{
  animacion();
},16);

//--Obtener el botón de dar un "paso"
const sacar = document.getElementById("sacar");

//Movemos la bola 5 pixeles
sacar.onclick = () => {
  //-- Incrementar la posicion x de la bola
  bola_x = 50;
  bola_vx = 3;
  console.log("Saque!");
}
window.onkeydown = (e) => {
  //--Comprobar si la tecla es un espacio
  switch (e.key) {
    case "a":
      raqI_v = 3;
      break;
    case " ":
    bola_x = 50;
    bola_vx = 3;
    console.log("Saque!");
      break;
    default:

  }
}
//--No hemos actualizado ninguna posición.
