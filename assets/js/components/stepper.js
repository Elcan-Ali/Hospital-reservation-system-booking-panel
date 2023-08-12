export default class Stepper {
    constructor(steps) {
        this.step = 0
        this.steps = Array.from(steps)
    }
    show() {
        this.steps.forEach(item => item.classList.remove("active"))
        this.steps[this.step].classList.add("active")
    }
    next() {
        if (this.step < 3) this.step += 1
        this.show()
    }
    prev() {
        if (this.step > 0) this.step -= 1
        this.show()
    }
}