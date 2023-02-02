class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/galaxy.gif";
    this.prota = new Prota();
    this.frames = 1;
    this.isGameOn = true;
    this.meteorito = new Meteorito(90);
    this.meteorito2 = new Meteorito(285);
    this.shotArr = [];
    this.meteoroArr = [];
    this.o2item = new o2();
    this.Dif = 0;
    this.dificultad();
    sound.currentTime = 0;
    
  }

  // Metodos

  // collision astronauta con el suelo
  /* checkColisionProtaSuelo = () => {
    if (this.prota.y > canvas.height +100 || this.prota.y < -100) {
      this.gameOver();
    }
  };
*/polvoEspacial = () =>{


  this.image = new Image() ;
  this.image.src = "./images/polvo.png"
  ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
  this.x = 500
  this.x -= 1
}

  checkColisionProtaSuelo = () => {
    if (this.prota.y > canvas.height) {
      this.prota.y -= 10;
      oxigeno = oxigeno - 5;
    } else if (this.prota.y < -35) {
      this.prota.y += 10;
      oxigeno = oxigeno - 5;
    }
  };

  collisionO2 = () => {
    if (
      this.o2item.x - 10 < this.prota.x &&
      this.o2item.x + this.o2item.w > this.prota.x &&
      this.o2item.y < this.prota.y + this.prota.h &&
      this.o2item.h + this.o2item.y > this.prota.y
    ) {
      itemSound.volume = 0.1;
      itemSound.play();
      oxigeno += 30;
      this.o2item.x = 700;
      this.o2item.x -= 0;
      this.y = Math.floor(Math.random() * 300) + 50;
    }
  };

  // gameOver => enviar a la pantalla final
  gameOver = () => {
    // 1. IMPORTANTE! detener la recursion
    this.isGameOn = false;
    sound.pause();
    gameOverSound.volume = 0.1;
    gameOverSound.play();

    // 2. ocultar el canvas
    canvas.style.display = "none";

    // 3. mostrar la pantalla final
    gameoverScreenDOM.style.display = "flex";
  };

  shotProta = (event) => {
    if (event.code === "ArrowUp" && this.shotArr.length < 3) {
      let shot = new Shot();
      //console.log("Añadiendo a Array")
      this.shotArr.push(shot);
    }
  };
  dificultad = () => {
    
    if (puntos === 1000 ) {
      this.Dif = 1;
      console.log(this.Dif)
    } else if ( puntos === 2000){
      this.Dif = 2
      console.log(this.Dif)
    } else if( puntos === 3000){
      this.Dif = 4
    } else if ( puntos === 5000){
      this.Dif = 6
    } else if ( puntos === 7500){
      this.Dif = 8
    }
  };
  generaMeteo = () => {
    if (this.meteoroArr.length < 4 + this.Dif) {
      let meteorito = new Meteorito();
      console.log("Añadiendo a Array ");
      this.meteoroArr.push(meteorito);
    }
  };
  // returnMeteorito2 = () => {
  //  if (this.meteorito2.x < -80) {
  //    this.meteorito2.x = 650;
  //   this.meteorito2.y = Math.floor(Math.random() * 400);
  //    this.meteorito2.h = Math.floor(Math.random() * (125 - 40 + 1)) + 40;
  //    this.meteorito2.w = Math.floor(Math.random() * (110 - 40 + 1)) + 40;
  //  }
  // };

  //*colisionProtaMeteorito2 = () => {
  // if (
  //    this.meteorito2.x < this.prota.x &&
  //   this.meteorito2.x + this.meteorito2.w > this.prota.x &&
  //    this.meteorito2.y < this.prota.y + this.prota.h &&
  //   this.meteorito2.h + this.meteorito2.y > this.prota.y
  //  ) {
  //     this.gameOver();
  //   }
  // };

  colisionProtaMeteorito = () => {
    this.meteoroArr.forEach((eachMeteo) => {
      if (
        eachMeteo.x < this.prota.x + this.prota.w &&
        eachMeteo.x + eachMeteo.w > this.prota.x &&
        eachMeteo.y < this.prota.y + this.prota.h &&
        eachMeteo.h + eachMeteo.y > this.prota.y
      ) {
        this.gameOver();
        //console.log("Protagonista Chocado");
        // activar el fin del juego (RECORDAR)////*/*/*/**/*//*/*/*/*/**//*/*/*/**//**/*/ */ */ */ */
      }
    });
  };
  // checkColisionDisparo = () => {
  // this.shotArr.forEach((eachShot) => {
  //   if (
  //    eachShot.x < this.meteorito.x + this.meteorito.w &&
  //    eachShot.x + eachShot.w > this.meteorito.x &&
  //     eachShot.y < this.meteorito.y + this.meteorito.h &&
  //    eachShot.h + eachShot.y > this.meteorito.y
  //   ) {
  //     this.shotArr.shift();
  //     this.meteorito.x = 600;
  //    this.meteorito.y = Math.floor(Math.random() * 400);
  //     puntos += 150;
  //    }
  //  });
  ///  };
  removeMeteo = () => {
    if (this.meteoroArr[0].x + this.meteoroArr[0].w < 0) {
      this.meteoroArr.shift();
    }
  };
  sinOxigeno = () => {
    if (oxigeno <= 0) {
      this.gameOver();
    }
  };

  /*      COLISION TIPO FLECHA 

  colisionShotArrMeteoroArr = () => {                          
    for (let i = 0; i < this.shotArr.length; i++) {
      let bala = this.shotArr[i];
      for (let j = 0; j < this.meteoroArr.length; j++) {
        let meteoro = this.meteoroArr[j];
        if (
          bala.x + bala.w > meteoro.x &&
          bala.x < meteoro.x + meteoro.w &&
          bala.y + bala.h > meteoro.y &&
          bala.y < meteoro.y + meteoro.h
        ) { 
          this.shotArr.splice(bala, 1)
          this.meteoroArr.splice(meteoro, 1)
         
      }
    }
  }; */
  removeShot = () => {
    this.shotArr.forEach((bala) => {
      if (bala.x > 620) {
        this.shotArr.shift();
      }
    });
  };
  // COLISION TIPO forEach()

  colisionShotArrMeteoroArr = () => {
    this.shotArr.forEach((bala) => {
      this.meteoroArr.forEach((meteoro) => {
        if (
          bala.x + bala.w > meteoro.x &&
          bala.x < meteoro.x + meteoro.w &&
          bala.y + bala.h > meteoro.y &&
          bala.y < meteoro.y + meteoro.h
        ) {
          puntos += 100;
          ctx.globalAlpha = 0.5;
          romperSound.volume = 0.3;
          romperSound.pause();
          romperSound.currentTime = 0;
          romperSound.play();
          romperSound.loop = false;
          this.shotArr.splice(this.shotArr.indexOf(bala), 1);
          this.meteoroArr.splice(this.meteoroArr.indexOf(meteoro), 1);
          ctx.globalAlpha = 0.9;
          setTimeout(function () {
            ctx.globalAlpha = 1;
          }, 30);
        }
      });
    });
  };

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  gravedad = () => {
    if (this.prota.speed < 2.5) {
      this.prota.speed += 0.05;
    } else {
      this.prota.speed += 0;
    }
  };
  //  G A M E   L O O P    //

  gameLoop = () => {
    this.frames++;

    // 1. limpiar el canvas

    this.clearCanvas();

    // 2. movimientos y acciones de todos los elementos
       
    this.prota.gravity();
    this.gravedad();
    this.checkColisionProtaSuelo();
    //this.shot.moveShot();
    this.collisionO2();
    this.colisionShotArrMeteoroArr();
    // 3. dibujado de los elementos
    this.removeShot();
    this.drawBg();
    this.prota.drawProta();
    //this.shot.drawShot();
    this.shotArr.forEach((eachShot) => {
      eachShot.drawShot();
      eachShot.moveShot();
    });
    this.dificultad();
    this.polvoEspacial();
    // this.removeShot();
    this.generaMeteo();
    this.removeMeteo();
    this.meteoroArr.forEach((eachMeteo) => {
      eachMeteo.drawMeteo();
      eachMeteo.moveMeteo();
    });
    this.sinOxigeno();
    this.colisionProtaMeteorito();
    this.o2item.drawo2();
    this.o2item.moveo2();
    // 4. recursion y control
    scoreDOM.innerText = puntos;
    oxigenDOM.innerText = oxigeno;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
