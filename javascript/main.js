// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#my-canvas")
const startScreenDOM = document.querySelector("#inicio-screen")
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const ctx = canvas.getContext("2d")
let game; 
let scoreDOM = document.querySelector("#puntos")
let oxigenDOM = document.querySelector("#oxigeno")
let divScore = document.querySelector("#puntos-p")
let divOxigeno = document.querySelector("#oxigeno-p")
let resetDOM = document.querySelector("#restart-btn")
let puntos = 0;
let oxigeno = 100;
var sound = new Audio("./sound/musicafondo.mp3");
sound.loop = true;
sound.volume = 0.1
const jetsound = new Audio("./sound/jet.mp3");
const laserSound = new Audio("./sound/laser.mp3")
const romperSound = new Audio("./sound/romper.mp3")
const itemSound = new Audio ("./sound/item.mp3")


// * STATE MANAGEMENT FUNCTIONS
function startGame() {


  // 1. cambiar la pantalla
  startScreenDOM.style.display = "none"
  canvas.style.display = "block"
  divOxigeno.style.display = "block"
  divScore.style.display = "block"
  // 2. crear un objeto de la clase Game
  game = new Game()

  let intervalOx = setInterval(function () {
    oxigeno--

  }, 500)

  sound.play()
  game.gameLoop()

}
let shotProta = (event) => {
  if (event.code === "ArrowUp" && game.shotArr.length < 2) {
    let shot = new Shot(game.prota.x +22, game.prota.y + 20);
    game.shotArr.push(shot);
  }
}



const flyProta = (event) => {
  if (event.code === "Space") {
  
  jetsound.play()
  jetsound.loop = false;
  jetsound.volume = 0.3
    //console.log("Astronauta Vuela!")
    game.prota.jumpProta()
  } else {jetsound.pause() }
}

const restartGame = () => {
 

  // 1. cambiar la pantalla
  gameoverScreenDOM.style.display = "none";
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";
  divOxigeno.style.display="block";
  divScore.style.display="block" ;
   // 2. crear un objeto de la clase Game
   game = new Game() 
  puntos = 0;
  oxigeno = 100;  
  sound.play();
  game.gameLoop()
 
}




// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)
resetDOM.addEventListener("click", restartGame)
window.addEventListener("keydown", flyProta)
window.addEventListener("keydown" , shotProta)
window.addEventListener("keydown", flyProta)  
document.addEventListener("keyup", function(event) {
  if (event.code === "Space") { jetsound.pause() 
    // aquí va la acción a realizar
  }
});



