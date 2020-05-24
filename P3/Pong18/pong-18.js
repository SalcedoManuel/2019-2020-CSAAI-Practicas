console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");

let count_player_1 = 0;
let count_player_2 = 0;
let count = true;

let player2 = false;

const player_one = document.getElementById('Player_One');
const player_two = document.getElementById('Player_Two');

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Pintar todos los objetos en el canvas
function draw() {
  //----- Dibujar la Bola
  //-- Solo en el estado de jugando
  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(count_player_1, 200, 80);
  ctx.fillText(count_player_2, 725, 80);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Saca!", 80, 500);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Pulsa Start!", 80, 500);
  }
}

//---- Bucle principal de la animación
function animacion(){
  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  if ((!player2)){
    if (count) {
      raqD.y = bola.y;
    }
  }
  raqD.update();
  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if ((bola.x >= canvas.width)||(bola.x <= 0)) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if ((bola.y >= canvas.height)||(bola.y<=0)) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Si llega al límite izquierdo, hemos perdido
  //-- pasamos al estado de SAQUE
  if (bola.x <= bola.size) {
     estado = ESTADO.SAQUE;
     if (count) {
       count_player_1 += 1;
       count = false;
       bola.x = 500;
       bola.y = 300;
     }
     bola.init();
     console.log("Tanto!!!!");
     return;
  }else if (bola.x >= (canvas.width - bola.size)) {
    estado = ESTADO.SAQUE;
    if (count) {
      count_player_2 += 1;
      count = false;
      bola.x = 500;
      bola.y = 300;
      console.log(bola.y);
    }
    bola.init();
    console.log("Tanto!!!!");
    return;
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if ((bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
       bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) ||
      (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
       bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height))) {
    //Cambiamos la velocidad de la bola.
    bola.vx *= -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
    }
  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()
  console.log(bola.vy);

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 940;
raqD.y_ini = 300;
raqD.init();
//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
    case "a":
      raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "p":
      if (player2) {
          raqD.v = raqD.v_ini * -1;
      }
      break;
    case "l":
      if (player2) {
        raqD.v = raqD.v_ini;
      }
      break;
    case "s":

      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        //-- Llevar bola a su posicion incicial
        bola.init();

        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;
        count = true;
        return false;
      }
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}

//-- Botón de arranque
const start = document.getElementById("start");

start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}
const second_player = document.getElementById("second_player");

second_player.onclick = () => {
  if (player2) {
    player2 = false;
  }else {
    player2 = true;
  }
}

const team_Player1_Rome = document.getElementById("teams1_rome");
team_Player1_Rome.onclick = () =>{
  raqI.team = "Rome";
  player_one.innerHTML = raqI.team;
}
const team_Player1_Carthago = document.getElementById("teams1_carthago");
team_Player1_Carthago.onclick = () =>{
  raqI.team = "Carthago";
  player_one.innerHTML = raqI.team;
}
const team_Player1_Egipt = document.getElementById("teams1_egipto");
team_Player1_Egipt.onclick = () =>{
  raqI.team = "Egipt";
  player_one.innerHTML = raqI.team;

}

const team_Player2_Rome = document.getElementById("teams2_rome");
team_Player2_Rome.onclick = () =>{
  raqD.team = "Rome";
  player_two.innerHTML = raqD.team;
}
const team_Player2_Carthago = document.getElementById("teams2_carthago");
team_Player2_Carthago.onclick = () =>{
  raqD.team = "Carthago";
  player_two.innerHTML = raqD.team;
}
const team_Player2_Egipt = document.getElementById("teams2_egipto");
team_Player2_Egipt.onclick = () =>{
  raqD.team = "Egipt";
  player_two.innerHTML = raqD.team;
}
