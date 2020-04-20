console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
video0 = document.getElementById("video0")
video0.width=600;  //-- Tamaño de la pantalla de video
video0.height=400;

video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;
video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video0.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
//-- Obtener los botones
//const play = document.getElementById("play")
const play1 = document.getElementById("play1")
const play2 = document.getElementById("play2")
const play3 = document.getElementById("play3")
const stop = document.getElementById("stop")

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
  video0.play();
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
