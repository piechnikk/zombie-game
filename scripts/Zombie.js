export default class Zombie {
    constructor(app, liveLoss) {
        this.liveLoss = liveLoss
        this.scale = Math.floor(Math.random() * 5) / 5 + 1

        this.width = 10 * this.scale
        this.height = 15.6 * this.scale

        this.x = -10 - this.scale * 3
        this.y = 15 - this.scale * 8

        this.bgPos = 0
        this.speed = (Math.random() * 5) / 10 + 0.1

        this.image = document.createElement("div")
        app.appendChild(this.image)
        this.image.classList.add("zombie")

        this.image.style.zIndex = this.scale * 5
        this.image.style.right = this.x + "vw"
        this.image.style.bottom = this.y + "vw"
        this.image.style.width = this.width + "vw"
        this.image.style.height = this.height + "vw"

        this.animation = setInterval(this.move.bind(this), 50)
    }

    move() {
        this.x += this.speed
        this.image.style.right = this.x + "vw"
        if (this.image.offsetLeft < 0) {
            app.removeChild(this.image)
            this.liveLoss()
        }
    }
}