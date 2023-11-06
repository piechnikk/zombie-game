import Game from "./Game.js";
let play = document.getElementById("play")
let go = document.getElementById("go")
let finalScore = document.getElementById("finalScore")

function newGame() {
    if (game) game.goAudio.pause()
    game = new Game()
    play.classList.add("hidden")
    go.classList.add("hidden")
    finalScore.classList.add("hidden")
}

let game

play.addEventListener("click", newGame)