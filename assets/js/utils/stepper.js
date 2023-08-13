import { Catcher } from "./cather.js"

export default class Stepper {
    
    constructor(steps) {
        this.step = 0
        this.steps = Array.from(steps)
    }
    show() {
        this.steps.forEach((item, index) => {
            item.classList.remove("active")
            item.classList.remove("checked")
            if (index < this.step) item.classList.add("checked")
        })
        this.steps[this.step].classList.add("active") 
    }
    next() {
        const catcher = new Catcher();
        let control = Object.values(catcher.validations())[this.step]   
        if (control && this.step < 3) this.step += 1
        this.show()
    }
    prev() {
        if (this.step > 0) this.step -= 1
        this.show()
    }

}