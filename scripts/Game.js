import Zombie from "./Zombie.js"

export default class Game {
    constructor() {
        this.app // app div
        this.scoreDiv

        this.points = 30
        this.lives = 3

        this.mainAudio
        this.pewAudio
        this.goAudio

        this.createBoard()

        // start new zombies creation
        new Zombie(this.app, this.liveLoss.bind(this))
        this.zombieCreator = setInterval(() => { new Zombie(this.app, this.liveLoss.bind(this)) }, 3000)
    }

    createBoard() {
        // create html structure
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

        // click handling
        this.app.addEventListener("click", this.handleClick.bind(this))

        // main audio
        this.mainAudio = new Audio("./assets/sounds/zombie-moans.mp3")
        this.mainAudio.loop = true
        this.mainAudio.play()
    }

    handleClick(e) {
        // out of ammo
        if (this.points <= 0) return

        // recognizing target
        if (e.target.classList.contains("zombie")) {
            this.points += 10
            this.app.removeChild(e.target)
        } else {
            this.points -= 3
        }

        // sounds of shooting
        let pewAudio = new Audio("./assets/sounds/pew-pew.mp3")
        pewAudio.play()

        // update points
        this.scoreDiv.innerText = this.points
    }

    liveLoss() {
        this.lives--

        // heart emptying
        document.getElementById("lives").children[this.lives].src = "./assets/images/empty_heart.png"

        if (this.lives == 0) this.gameOver()
    }


    gameOver() {
        // stop new zombies
        clearInterval(this.zombieCreator)

        // remove click handler
        this.app.removeEventListener("click", this.handleClick.bind(this))

        // delete html
        document.body.removeChild(this.app)

        // stop main audio
        this.mainAudio.pause()

        // show game over
        document.getElementById("go").classList.remove("hidden")

        // show collected points
        let finalScore = document.getElementById("finalScore")
        finalScore.classList.remove("hidden")
        finalScore.innerText = "Your score: " + this.points

        // show play again button
        let play = document.getElementById("play")
        play.innerText = "PLAY AGAIN"
        play.classList.remove("hidden")

        // start game over audio
        this.goAudio = new Audio("./assets/sounds/game-over.mp3")
        this.goAudio.play()
    }
}