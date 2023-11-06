import Zombie from "./Zombie.js"

export default class Game {
    constructor() {
        this.app
        this.points = 30
        this.lives = 3

        this.scoreDiv

        this.createBoard()
        this.app.addEventListener("click", this.handleClick.bind(this))
        this.zombieCreator = setInterval(() => { new Zombie(this.app, this.liveLoss.bind(this)) }, 3000)
    }

    createBoard() {
        let app = document.createElement("div")
        app.id = "app"
        document.body.appendChild(app)
        this.app = app

        let topbar = document.createElement("div")
        topbar.id = "topBar"

        let lives = document.createElement("div")
        lives.id = "lives"

        let heart1 = document.createElement("img")
        heart1.src = "./assets/images/full_heart.png"
        lives.appendChild(heart1)

        let heart2 = document.createElement("img")
        heart2.src = "./assets/images/full_heart.png"
        lives.appendChild(heart2)

        let heart3 = document.createElement("img")
        heart3.src = "./assets/images/full_heart.png"
        lives.appendChild(heart3)

        topbar.appendChild(lives)

        let score = document.createElement("p")
        this.scoreDiv = score
        score.id = "score"
        score.innerText = this.points
        topbar.appendChild(score)
        this.app.appendChild(topbar)
    }

    handleClick(e) {
        if (this.points <= 0) {
            return
        }
        if (e.target.classList.contains("zombie")) {
            this.points += 10
            this.app.removeChild(e.target)
        } else {
            this.points -= 3
        }
        this.scoreDiv.innerText = this.points
    }

    liveLoss() {
        this.lives--
        document.getElementById("lives").children[this.lives].src = "./assets/images/empty_heart.png"
        if (this.lives == 0) {
            this.gameOver()
        }
    }


    gameOver() {
        clearInterval(this.zombieCreator)
        this.app.removeEventListener("click", this.handleClick.bind(this))
        document.body.removeChild(this.app)

        document.getElementById("go").classList.remove("hidden")

        let finalScore = document.getElementById("finalScore")
        finalScore.classList.remove("hidden")
        finalScore.innerText = "Your score: " + this.points

        let play = document.getElementById("play")
        play.innerText = "PLAY AGAIN"
        play.classList.remove("hidden")
    }
}