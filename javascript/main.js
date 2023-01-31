// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#my-canvas")
const startScreenDOM = document.querySelector("#inicio-screen")
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const ctx = canvas.getContext("2d")
let game; 
let scoreDOM = document.querySelector("#puntos")
let puntos = 0;


// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
 

  // 1. cambiar la pantalla
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // 2. crear un objeto de la clase Game
  game = new Game() 
 

  game.gameLoop()

}
const shotProta = (event) => {
  if (event.code === "ArrowUp")   {
    let shot = new Shot(game.prota.x, game.prota.y)
    console.log(game.prota.y)
  game.shotArr.push(shot)
  }
}


const flyProta = (event) => {
  if (event.code === "Space") {
    //console.log("Astronauta Vuela!")
    game.prota.jumpProta()
  }
}






// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)
window.addEventListener("keydown", flyProta)
window.addEventListener("keydown" , shotProta)
  



