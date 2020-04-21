console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');
const deslizador_azul = document.getElementById('deslizador_azul');
const deslizador_green = document.getElementById('deslizador_green');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');
const range_value_blue = document.getElementById('range_value_azul');
const range_value_green = document.getElementById('range_value_green');

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
deslizador.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral = deslizador.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador
deslizador_azul.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  //range_value.innerHTML = deslizador.value;
  range_value_blue.innerHTML = deslizador_azul.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral = deslizador_azul.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=(4+2)) {
    if (data[i] > umbral)
      data[i] = umbral;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

deslizador_green.oninput = () => {
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

  //-- Obtener el umbral de rojo del deslizador
  umbral = deslizador_green.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=(4+1)) {
    if (data[i] > umbral)
      data[i] = umbral;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}
//Lo que queda por hacer es crear tres variables de umbrales y así juntar
//las tres componentes y poder hacer el ejercicio.
console.log("Fin...");
