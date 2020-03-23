console.log("Ejecutando JS...");

//--  Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='white'
ctx.rect(300, 200, 20, 20);
ctx.fill();
