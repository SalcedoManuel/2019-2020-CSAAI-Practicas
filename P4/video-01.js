console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
video0 = document.getElementById("video0")
video0.width=800;  //-- Tamaño de la pantalla de video
video0.height=400;

video1 = document.getElementById("video1")
video1.width=400;  //-- Tamaño de la pantalla de video
video1.height=200;
video1.src = "Vicente_Calderón_1.mp4";

video2 = document.getElementById("video2")
video2.width=400;  //-- Tamaño de la pantalla de video
video2.height=200;
video2.src = "Ultimo_Himno_Calderon.mp4";

video3 = document.getElementById("video3")
video3.width=400;  //-- Tamaño de la pantalla de video
video3.height=200;
video3.src = "Last_Champions_Match.mp4";
//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video0.poster="text.jpg";
video1.poster="text.jpg";
video2.poster="text.jpg";
video3.poster="text.jpg";
//-- Obtener los botones
//const play = document.getElementById("play")
const play1 = document.getElementById("play1")
const play2 = document.getElementById("play2")
const play3 = document.getElementById("play3")
const stop = document.getElementById("stop")
const loop_mode = document.getElementById("loop_mode")
const test_canal= document.getElementById("test_canal")
let loop = false;

function play() {
  video0.play();
  video1.play();
  video2.play();
  video3.play();
}

play1.onclick = () =>{
  console.log("Primer Vídeo");
  video0.src = video1.src;
  video0.currentTime = video1.currentTime;
  play();
};

play2.onclick = () =>{
  console.log("Segundo Vídeo");
  video0.src = video2.src;
  video0.currentTime = video2.currentTime;
  console.log(video2.currentTime);
  play();
};

play3.onclick = () =>{
  console.log("Tercer Vídeo");
  video0.src = video3.src;
  video0.currentTime = video3.currentTime;
  play();
}

setInterval(()=>{
  if (loop && video0.currentTime >2) {
    video0.currentTime = 0;
  }
},16);

//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  video0.pause();
  video1.pause();
  video2.pause();
  video3.pause();
  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video0.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
}
test_canal.onclick = () =>{
  video0.poster = "TEST.jpg";
  video0.src="TEST.jpg";
}
loop_mode.onclick = () =>{
  if (loop) {
    loop = false;
  }else {
    loop = true;
  }

}
