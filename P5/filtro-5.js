console.log("Ejecutando JS....")
//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_red = document.getElementById('deslizador_red');
const deslizador_blue = document.getElementById('deslizador_blue');
const deslizador_green = document.getElementById('deslizador_green');
grey = document.getElementById('boton_gris');

//-- Valor del deslizador
const range_value_red = document.getElementById('range_value_red');
const range_value_blue = document.getElementById('range_value_blue');
const range_value_green = document.getElementById('range_value_green');
grey_bool = document.getElementById("grey_bool");
//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion de retrollamada del deslizador
deslizador_red.oninput = () => {
  if (grey_bool.innerHTML == "ON") {
    grey_bool.innerHTML = "OFF";
  }
  //-- Mostrar el nuevo valor del deslizador
  range_value_red.innerHTML = deslizador_red.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  bucle(data,imgData);
}
deslizador_green.oninput = () => {
  if (grey_bool.innerHTML == "ON") {
    grey_bool.innerHTML = "OFF";
  }
  //-- Mostrar el nuevo valor del deslizador
  //range_value.innerHTML = deslizador.value;
  range_value_green.innerHTML = deslizador_green.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data
  bucle(data,imgData);
}
deslizador_blue.oninput = () => {
  if (grey_bool.innerHTML == "ON") {
    grey_bool.innerHTML = "OFF";
  }
  //-- Mostrar el nuevo valor del deslizador
  //range_value.innerHTML = deslizador.value;
  range_value_blue.innerHTML = deslizador_blue.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  bucle(data,imgData);
}
grey.onclick=()=>{
  if (grey_bool.innerHTML == "ON") {
    grey_bool.innerHTML = "OFF";
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    bucle(data,imgData);
  }else {
    grey_bool.innerHTML = "ON";
  var imgDataG = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  var data = imgDataG.data

  //-- Filtrar la imagen según el nuevo umbral
  for (var i = 0; i < data.length; i+=4) {
    var r = data[i];
    var g = data[i+1];
    var b = data[i+2];
    //tambien he encontrado que va con:
    // var v = 0.2126*r + 0.7152*g + 0.0722*b;
    var v = (3*r +4*g + b)/8;
    data[i] = data[i+1] = data[i+2] = v
    }
    ctx.putImageData(imgDataG, 0, 0);
  }
}

function bucle(data,imgData) {
  //-- Obtener el umbral de rojo del deslizador
  umbral_red = deslizador_red.value
  //-- Obtener el umbral de verde del deslizador
  umbral_verde = deslizador_green.value
  //-- Obtener el umbral de azul del deslizador
  umbral_blue = deslizador_blue.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_red)
      data[i] = umbral_red;
  }
  for (let i = 1; i < data.length; i+=(4)) {
    if (data[i] > umbral_verde)
      data[i] = umbral_verde;
  }
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 2; i < data.length; i+=(4)) {
    if (data[i] > umbral_blue)
      data[i] = umbral_blue;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

image1.onclick = () => {
    img.src = image1.src;
    restart();
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
image2.onclick = () => {
    img.src = image2.src
    restart();
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
image3.onclick = () => {
    img.src = image3.src;
    restart();
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
image4.onclick = () => {
    img.src = image4.src;
    restart();
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
function restart() {
  deslizador_red.value = "255";
  range_value_red.innerHTML = deslizador_red.value;
  deslizador_green.value = "255";
  range_value_green.innerHTML = deslizador_green.value;
  deslizador_blue.value = "255";
  range_value_blue.innerHTML = deslizador_blue.value;
  grey_bool.innerHTML = "OFF"
}
console.log("Fin...");
