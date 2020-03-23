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
ctx.rect(100, 200, 10, 10);
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
ctx.moveTo(canvas.width/2, 0)

//--Dibujar hasta el punto inferior
ctx.lineTo(canvas.width/2, canvas.height);
ctx.stroke();


//---Tanteo

ctx.font ="100px Arial";
ctx.fillStyle = "white";
ctx.fillText("0", 200, 80);
ctx.fillText("1", 340, 80);
