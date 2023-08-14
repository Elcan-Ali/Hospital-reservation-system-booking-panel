import { data } from "./data/dummy-data.js"
import Stepper from "./utils/stepper.js"
import Calendar from "./components/calendar.js"
import Renderer from "./utils/render.js"

const { date } = data

const prevBtn = document.querySelector("#btn-prev")
const nextBtn = document.querySelector("#btn-next")
const pages = document.querySelectorAll(".page")
const confirmCloseBtn = document.querySelector("#confirm-modal span img")
const confirmModalWrapper = document.querySelector("#confirm-modal-wrapper")
const confirmModal = document.querySelector("#confirm-modal")
const closeButton = document.querySelector("#stepper-header img")

const pageStepper = new Stepper(pages)
const calendar = new Calendar("#date-time-wrapper", date)
const renderer = new Renderer()

pageStepper.show()
calendar.show()
renderer.show()

function closeModal() {
    confirmModalWrapper.classList.remove("active")
}

confirmCloseBtn.addEventListener("click", closeModal)
confirmModalWrapper.addEventListener("click", closeModal)
closeButton.addEventListener("click", () => location.reload())
confirmModal.addEventListener("click", (e) => e.stopPropagation())


nextBtn.addEventListener("click", () => {
    pageStepper.next()
})
prevBtn.addEventListener("click", () => {
    pageStepper.prev()
})









