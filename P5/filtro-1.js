console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
img = document.getElementById('image1');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_rojo = document.getElementById('deslizador_rojo');
const deslizador_azul = document.getElementById('deslizador_azul');
const deslizador_green = document.getElementById('deslizador_green');

//-- Valor del deslizador
const range_value_rojo = document.getElementById('range_value_rojo');
const range_value_blue = document.getElementById('range_value_azul');
const range_value_green = document.getElementById('range_value_green');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  //canvas.width = img.width;
  //canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  img = document.getElementById('image1');
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};



deslizador_rojo.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_rojo.innerHTML = deslizador_rojo.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  bucle(data,imgData);
}
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

  bucle(data,imgData);
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
  bucle(data,imgData);
}
function bucle(data,imgData) {
  //-- Obtener el umbral de rojo del deslizador
  umbral_rojo = deslizador_rojo.value
  //-- Obtener el umbral de rojo del deslizador
  umbral_verde = deslizador_green.value
  //-- Obtener el umbral de rojo del deslizador
  umbral_azul = deslizador_azul.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_rojo)
      data[i] = umbral_rojo;
  }
  for (let i = 1; i < data.length; i+=(4)) {
    if (data[i] > umbral_verde)
      data[i] = umbral_verde;
  }
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 2; i < data.length; i+=(4)) {
    if (data[i] > umbral_azul)
      data[i] = umbral_azul;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}
image1.onclick = () => {
    img = document.getElementById('image1');
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
image2.onclick = () => {
    img = document.getElementById('image2');
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
image3.onclick = () => {
    img = document.getElementById('image3');
    console.log(canvas.height);
    img.height = canvas.height;
    console.log(img.height);
    ctx.drawImage(img, 0,0);
}
console.log("Fin...");
