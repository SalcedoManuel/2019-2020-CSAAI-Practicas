//-- Objeto raqueta
class Raqueta
{
  constructor(ctx) {

    //-- Guardar el contexto
    this.ctx = ctx;

    //-- Constante: Tamaño de la raqueta
    this.width = 10;
    this.height = 50;

    //-- Constante: Posicion inicial
    this.x_ini = 50;
    this.y_ini = 100;

    //-- Constante: Velocidad
    this.v_ini = 3;

    //-- Velocidad (variable)
    this.v = 0;
    //-- Posicion cuando golpea la otra pala.
    this.pos_y = 300;
    //-- Combo que se activa cuando la otra pala golpea.
    this.combo_vy = 1;
    //Equipo de la pala
    this.team = "Carthago";
    //-- Inicializar la raqueta a su posicion inicial
    this.init();
  }

  //-- Inicializar la raqueta a su posicion original
  init()
  {
    this.x = this.x_ini;
    this.y = this.y_ini;
  }

  //-- Actualizar la posición de la raqueta
  update()
  {
    this.y += this.v;
  }

  //-- Dibujar la raqueta
  draw()
  {
    //------- Dibujar las raquetas
    this.ctx.beginPath();
    if (this.team == "Rome") {
      this.ctx.fillStyle='red';
    }else if (this.team == "Egipt") {
      this.ctx.fillStyle='blue';
    }else {
      this.ctx.fillStyle='white';
    }


    //-- Raqueta izquierda
    this.ctx.rect(this.x, this.y, this.width, this.height);

    //-- Pintar!
    this.ctx.fill();
  }
}
