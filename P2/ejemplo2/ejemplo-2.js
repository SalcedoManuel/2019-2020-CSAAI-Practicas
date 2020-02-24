console.log("Ejecutando JS....");
// -- Accedemos al párrafo de prueba
const test = document.getElementById('test')
// -- Función de retrollamada
test.onclick = () => {
  console.log("Click!!");
  if (test.style.backgroundColor=="") {
      test.style.backgroundColor = "yellow";
  } else {
    test.style.backgroundColor = "";
  }
}
