import Game from "./Game.js";
let play = document.getElementById("play")
let go = document.getElementById("go")
let finalScore = document.getElementById("finalScore")

function newGame() {
    // if there was previous game stop game-over audio
    if (game) game.goAudio.pause()

    game = new Game()

    // hide new game button and game over panel
    play.classList.add("hidden")
    go.classList.add("hidden")
    finalScore.classList.add("hidden")
}

let game

play.addEventListener("click", newGame)