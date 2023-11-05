import Game from "./Game.js";
let play = document.getElementById("play")
function newGame() {
    game = new Game()
    play.classList.add("hidden")
}

let game

play.addEventListener("click", newGame)