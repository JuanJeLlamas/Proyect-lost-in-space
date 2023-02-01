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
let puntos = 0;
let oxigeno = 100;
var sound = new Audio("./sound/musicafondo.mp3");
sound.loop = true;
sound.volume = 0.05
const jetsound = new Audio("./sound/jet.mp3");


function showDiv() {
  div.style.display = "block";
}

function hideDiv() {
  divScore.style.display = "none";
  divOxigeno.style.display = "none";
}

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
 

  // 1. cambiar la pantalla
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // 2. crear un objeto de la clase Game
  game = new Game() 

  setInterval(function() {
    oxigeno--;
    console.log(tiempo);
  }, 333);
  
  sound.play();
  game.gameLoop()
 
}
const shotProta = (event) => {
  if (event.code === "ArrowUp" && game.shotArr.length < 2)   {
    let shot = new Shot(game.prota.x +22, game.prota.y + 20)
    console.log(game.prota.y)
  game.shotArr.push(shot)
  }
}


const flyProta = (event) => {
  if (event.code === "Space") {
  
  jetsound.play()
  jetsound.loop = false;
  jetsound.volume = 0.08
    //console.log("Astronauta Vuela!")
    game.prota.jumpProta()
  } else {jetsound.pause() }
}






// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)
window.addEventListener("keydown", flyProta)
window.addEventListener("keydown" , shotProta)
window.addEventListener("keydown", flyProta)  
document.addEventListener("keyup", function(event) {
  if (event.code === "Space") { jetsound.pause() 
    // aquí va la acción a realizar
  }
});



