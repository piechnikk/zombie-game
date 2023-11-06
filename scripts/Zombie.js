export default class Zombie {
    constructor(app, liveLoss) {
        this.liveLoss = liveLoss // function that handle live loss

        this.scale = Math.floor(Math.random() * 5) / 5 + 1
        this.width = 10 * this.scale
        this.height = 15.6 * this.scale

        // actual position
        this.x = -10 - this.scale * 3
        this.y = 15 - this.scale * 8

        this.speed = (Math.random() * 5) / 10 + 0.1

        // create zombie html element
        this.image = document.createElement("div")
        this.image.classList.add("zombie")
        app.appendChild(this.image)

        this.image.style.zIndex = this.scale * 5
        this.image.style.right = this.x + "vw"
        this.image.style.bottom = this.y + "vw"
        this.image.style.width = this.width + "vw"
        this.image.style.height = this.height + "vw"

        // start move
        this.animation = setInterval(this.move.bind(this), 50)
    }

    move() {
        // move zombie
        this.x += this.speed
        this.image.style.right = this.x + "vw"

        // zombie hit endpoint
        if (this.image.offsetLeft < 0) {
            app.removeChild(this.image)
            this.liveLoss()
        }
    }
}