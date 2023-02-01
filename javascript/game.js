class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/galaxy.gif";
    this.prota = new Prota();
    this.frames = 1;
    this.isGameOn = true;
  

    this.meteorito = new Meteorito(90);

    this.meteorito2 = new Meteorito(285);

    this.shot = new Shot(this.prota.x, this.prota.y);
    this.shotArr = [];
    
  }

  // Metodos

  // collision astronauta con el suelo
  checkColisionProtaSuelo = () => {
    if (
      this.prota.y + this.prota.h > canvas.height ||
      this.prota.y + this.prota.h < 0
    ) {
      this.gameOver();
    }
  };
  // colision disparo "shot"



  // gameOver => enviar a la pantalla final
  gameOver = () => {
    // 1. IMPORTANTE! detener la recursion
    this.isGameOn = false;

    // 2. ocultar el canvas
    canvas.style.display = "none";

    // 3. mostrar la pantalla final
    gameoverScreenDOM.style.display = "flex";
  };
  returnMeteorito = () => {
    if (this.meteorito.x < -80 ) {
      puntos = puntos + 100;
      this.meteorito.x = 600;
      this.meteorito.y = Math.floor(Math.random() * 400);
    }
  };
  


  shotProta = (event) => {

  if (event.code === "ArrowUp" && this.shotArr.length < 1){
     
    let shot = new Shot()
    //console.log("Añadiendo a Array")
    this.shotArr.push(shot)
  }
}
  returnMeteorito2 = () => {
    if (this.meteorito2.x < -80) {
      this.meteorito2.x = 650;
      this.meteorito2.y = Math.floor(Math.random() * 400);
      this.meteorito2.h = Math.floor(Math.random() * (125 - 40 + 1)) + 40;
      this.meteorito2.w = Math.floor(Math.random() * (110 - 40 + 1)) + 40;
    }
  };
  colisionProtaMeteorito = () => {
    if (
      this.meteorito.x -10 < this.prota.x  &&
      this.meteorito.x + this.meteorito.w > this.prota.x &&
      this.meteorito.y < this.prota.y + this.prota.h &&
      this.meteorito.h + this.meteorito.y > this.prota.y 
    ) {
      this.gameOver();
      //console.log("Protagonista Chocado");
      // activar el fin del juego (RECORDAR)////*/*/*/**/*//*/*/*/*/**//*/*/*/**//**/*/ */ */ */ */
    }
  };



  colisionProtaMeteorito2 = () => {
    if (
      this.meteorito2.x < this.prota.x  &&
      this.meteorito2.x + this.meteorito2.w > this.prota.x &&
      this.meteorito2.y < this.prota.y + this.prota.h &&
      this.meteorito2.h + this.meteorito2.y > this.prota.y
    ) {
      this.gameOver();
      //console.log("Protagonista Chocado");
      // activar el fin del juego (RECORDAR)//********//*******///*****////******///// */ */ */ */
    }
  };


  checkColisionDisparo = () => {
    this.shotArr.forEach((eachShot) => {
   
    if (
      eachShot.x < this.meteorito.x + this.meteorito.w &&
      eachShot.x + eachShot.w > this.meteorito.x &&
      eachShot.y < this.meteorito.y + this.meteorito.h &&
      eachShot.h + eachShot.y > this.meteorito.y 
    )
   
    {this.shotArr.shift()
      this.meteorito.x = 600;
      this.meteorito.y = Math.floor(Math.random() * 400)
  puntos += 150}
  })}
  
  checkColisionDisparo2 = () => {
    this.shotArr.forEach((eachShot) => {
   
    if (
      eachShot.x < this.meteorito2.x + this.meteorito2.w &&
      eachShot.x + eachShot.w > this.meteorito2.x &&
      eachShot.y < this.meteorito2.y + this.meteorito2.h &&
      eachShot.h + eachShot.y > this.meteorito2.y 
    )
   
    {this.shotArr.shift()
      this.meteorito2.x = 650;
      this.meteorito2.y = Math.floor(Math.random() * 400);
      this.meteorito2.h = Math.floor(Math.random() * (125 - 40 + 1)) + 40;
      this.meteorito2.w = Math.floor(Math.random() * (110 - 40 + 1)) + 40;
  puntos += 150}
  })}
  


  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //  G A M E   L O O P    //

  gameLoop = () => {
    this.frames++;

    // 1. limpiar el canvas
   
    this.clearCanvas();

    // 2. movimientos y acciones de todos los elementos
   
    this.prota.gravity();
    this.prota.speed += 0.05;
    this.checkColisionProtaSuelo();
    this.colisionProtaMeteorito();
    this.returnMeteorito();
    this.colisionProtaMeteorito2();
    this.returnMeteorito2();
    this.shot.moveShot();
    this.checkColisionDisparo();
    this.checkColisionDisparo2()
    ;
    // 3. dibujado de los elementos
    
    this.drawBg();
    this.prota.drawProta();
    this.meteorito.drawMeteo();
    this.meteorito.moveMeteo();
    this.meteorito2.drawMeteo();
    this.meteorito2.moveMeteo();
    this.shot.drawShot();
    this.shotArr.forEach((eachShot) => {
      eachShot.drawShot()
      eachShot.moveShot()
    })
    
    // 4. recursion y control
    scoreDOM.innerText = puntos
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
