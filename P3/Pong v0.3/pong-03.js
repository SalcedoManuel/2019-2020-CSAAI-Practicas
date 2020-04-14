console.log("Ejecutando JS...");

//--  Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Variables para el marcador
let count_1 = 0;
let count_2 = 0;

//--Variables para la Bola
var init_bola_x = 300;
var init_bola_y = 200;
let bola_x = init_bola_x;
let bola_y = init_bola_y;
let bola_vx = 0;
let bola_vy = 0;

//--Variables para la raqueta Izquierda
let raqI_y = 200;
let raqI_v = 0;

//--Variables para la raqueta Derecha
let raqD_y = 200;
let raqD_v = 0;

//-- Pintar todos los objetos en el canvas
function draw() {
  //-- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white'
  ctx.rect(bola_x, bola_y, 10, 10);
  ctx.fill();

  //--Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';
  //--Raqueta Izquierda
  ctx.rect(50, raqI_y, 10, 40);
  //--Raqueta Derecha
  ctx.rect(550,raqD_y,10,40);
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
  ctx.fillText(count_1, 200, 80); //Contador Jugador 1, Pos Eje X, Pos Eje Y;
  ctx.fillText(count_2, 340, 80); //Contador Jugador 2, Pos Eje X, Pos Eje Y;
}

function goal()
{
  bola_x = 300;
  bola_y = 200;
  bola_vx = bola_vx * -1;
  bola_vy = bola_vy * -1;
}
function init()
{
  bola_x = 300;
  bola_y = 200;
  bola_vx = 1;
  bola_vy = -1;
}
function marcador_bola()
{
  if(bola_x >= (canvas.width - 40)) {
    goal();
    count_1 += 1;
  }else if (bola_x < 40) {
    goal();
    count_2 += 1;
  }else if ((bola_y < 0)||(bola_y> canvas.height)) {
    bola_vy = bola_vy * (-1);
  }
  //-- Incrementar la posicion x y la y de la bola
  bola_x += bola_vx;
  bola_y += bola_vy;
}

function raqueta()
{
  if (raqI_y > (canvas.height - 40)) {
    raqI_y = (canvas.height - 40);
    //raqI_v = 0;
  }else if (raqI_y < 0) {
    raqI_y = 0;
  }

  if (raqD_y > (canvas.height - 40)) {
    raqD_y = (canvas.height - 40);
  }else if (raqD_y < 0) {
    raqD_y = 0;
  }
  //-- Incrementar la posicion de la raqueta.
  raqI_y += raqI_v;
  raqD_y += raqD_v;
  raqD_v = 0;
  raqI_v = 0;
}
function rebote() {
  if (((bola_y >= raqI_y) && (bola_y <= (raqI_y + 40))) && (bola_x <= 50)) {
    bola_vx = bola_vx * (-1);
  }else if (((bola_y >= raqD_y) && (bola_y <= (raqD_y + 40))) && (bola_x >= 550)) {
    bola_vx = bola_vx * (-1);
  }
}
//-- Bucle principal de la animación
function animacion()
{
  //--Funcion que lleva el contador y la bola
  marcador_bola()
  //--Función de la raqueta
  raqueta()
  //--Funcion rebote en la pala
  rebote()
  //--Borrar el canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

setInterval(()=>{
  animacion();
},16);


window.onkeydown = (e) => {
  //--Comprobar si la tecla es un espacio
  switch (e.key) {
    case "s":
      raqI_v = 10;
      break;
    case "w":
      raqI_v = -10;
      break;
    case 'ArrowDown':
      raqD_v = 10;
      break;
    case 'ArrowUp':
      raqD_v = -10;
      break;
    case " ":
      init();
      console.log("Saque!");
      break;
    default:

  }
}
//--No hemos actualizado ninguna posición.
