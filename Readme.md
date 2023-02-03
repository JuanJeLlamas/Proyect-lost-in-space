

# NAME OF YOUR PROYECT


## [Play the Game](www.your-deploy-url-here.com)


# Description

Perdido en el espacio es un juego de habilidad, donde manejas un astronauta evitando que colisione contra una lluvia de meteoritos. 
El protagonista tiene un movimiento vertical y los meteoritos llegarán del lado derecho. 
Esquiva o destruye los meteoritos y recoge todas las burbujas de oxigeno para poder sobrevivir.
El contador de oxigeno se ira agotando con el tiempo y cada vez que impactes contra los limites de la pantalla. 


# Main Functionalities

Las funciones principales son, de protagonista, de meteoritos y de control de juego.

    prota.gravity();
    gravedad();
    checkColisionProtaSuelo();
    collisionO2();
    colisionShotArrMeteoroArr();
    removeShot();
    prota.drawProta();
    shotArr.forEach((eachShot) => {
      eachShot.drawShot();
      eachShot.moveShot();
    });
    dificultad();
    generaMeteo();
    removeMeteo();
    meteoroArr.forEach((eachMeteo) => {
      eachMeteo.drawMeteo();
      eachMeteo.moveMeteo();
    });

    sinOxigeno();
    colisionProtaMeteorito();
    o2item.drawo2();
    o2item.moveo2();


# Backlog Functionalities

 El juego cuenta con un sistema de puntuación, que aumenta cada vez que colisionamos con un meteorito.
 En principio la funcionalidad iba a ser que cada meteorito que escape sin ser destruido nos iba a restar puntos, pero finalmente esa decisión se abortó por el impacto que tiene la puntuación con la dificultad del juego.

 También cuenta con un contador de oxigeno que se va gastando cada segundo y que también se consume mas rapido al impactar con los bordes de la pantalla. 

 La dificultad del juego va creciendo paulatinamente según vayamos jugando, aumentando la velocidad y la cantidad de meteoritos en pantalla. 


# Proyect Structure

- List here the JS files you think you might need. 
- One main.js to manage DOM elements, one for Game class and one for each other class.
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.

Example:

## main.js

- startGame()
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const startScreenDOM = document.querySelector("#inicio-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const ctx = canvas.getContext("2d");
let game;
let Dif = 0;
let scoreDOM = document.querySelector("#puntos");
let oxigenDOM = document.querySelector("#oxigeno");
let divScore = document.querySelector("#puntos-p");
let divOxigeno = document.querySelector("#oxigeno-p");
let resetDOM = document.querySelector("#restart-btn");
let finalpoints = document.querySelector("#finalpoints")
let puntos = 0;
let oxigeno = 100;

//SONIDO*

var sound = new Audio("./sound/musicafondo.mp3");
sound.loop = true;
sound.volume = 0.1;
const jetsound = new Audio("./sound/jet.mp3");
const laserSound = new Audio("./sound/laser.mp3");
const romperSound = new Audio("./sound/romper.mp3");
const itemSound = new Audio("./sound/item.mp3");
const gameOverSound = new Audio("./sound/gameover.mp3");


## game.js


  dificultad = () => {
    if (puntos === 1000) {
      this.Dif = 1;
      console.log(this.Dif);
    } else if (puntos === 2000) {
      this.Dif = 2;
      console.log(this.Dif);
    } else if (puntos === 3000) {
      this.Dif = 4;
    } else if (puntos === 5000) {
      this.Dif = 6;
    } else if (puntos === 7500) {
      this.Dif = 8;
    }
  };

  // GameOver  * * *
  gameOver = () => {
    // 1. IMPORTANTE! detener la recursion
    this.isGameOn = false;
    sound.pause();
    gameOverSound.volume = 0.1;
    gameOverSound.play();
    gameoverScreenDOM.style.display = "flex";
    finalpoints.innerText = points
  };

  gravedad = () => {
    if (this.prota.speed < 2.5) {
      this.prota.speed += 0.05;
    } else {
      this.prota.speed += 0;
    }
  };


  gameLoop () 
  
    finalpoints.innerText = puntos;
    scoreDOM.innerText = puntos;
    oxigenDOM.innerText = oxigeno;

## player.js 
class Prota {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.x = 95;
    this.y = 30;
    this.h = 49;
    this.w = 40;
    this.speed = 0.0;
    this.image = new Image();
    this.image.src = "./images/prota.png";
  }

  // metodos
  drawProta = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    this.image.src = " ./images/prota.png";
  };

  //  gravedad espacial
  gravity = () => {
    this.y += this.speed;
  };

  // volar
  jumpProta = () => {
    if (this.speed > -2) {
      this.speed -= 0.22;

      this.image.src = "./images/prota2.png";

      this.speed -= 0.22;
    }
  };

  const flyProta = (event) => {
  if (event.code === "Space") {
    jetsound.play();
    jetsound.loop = false;
    jetsound.volume = 0.3;
    game.prota.jumpProta();
  } else {
    jetsound.pause();
  }
};


# States and Transitions

Tenemos una pantalla principal describiendo los controles basicos con un botón 
de inicio.
Una vez pulsado pasamos a la pantalla de juego, donde se desarrolla la aventura.
Una vez acabado el juego, pasamos a la pantalla de Game Over, donde nos muestra nuestra puntuación final y un botón para reiniciar la partida en caso de querer volver a jugar. 