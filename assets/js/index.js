import { data } from "./data/dummy-data.js"
import Stepper from "./utils/stepper.js"
import Calendar from "./components/calendar.js"
import Renderer from "./utils/render.js"


const { date } = data

const prevBtn = document.querySelector("#btn-prev")
const nextBtn = document.querySelector("#btn-next")
const pages = document.querySelectorAll(".page")
const menuItems = document.querySelectorAll(".menu-item")

const pageStepper = new Stepper(pages)
const menuStepper = new Stepper(menuItems)
const calendar = new Calendar("#date-time-wrapper", date)
const renderer = new Renderer()


pageStepper.show()
menuStepper.show()
calendar.show()
renderer.show()





nextBtn.addEventListener("click", () => {
    pageStepper.next()
    menuStepper.next()
})
prevBtn.addEventListener("click", () => {
    menuStepper.prev()
    pageStepper.prev()
})









