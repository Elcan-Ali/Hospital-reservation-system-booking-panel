import { data } from "./data/dummy-data.js"
import Stepper from "./utils/stepper.js"
import Calendar from "./components/calendar.js"
import { render } from "./utils/render.js"
import { addChecked } from "./utils/addChecked.js"
import Components from "./components/components.js"

const { staff, services, date } = data

const prevBtn = document.querySelector("#btn-prev")
const nextBtn = document.querySelector("#btn-next")
const pages = document.querySelectorAll(".page")
const confirmCloseBtn = document.querySelector("#confirm-modal span img")
const confirmModalWrapper = document.querySelector("#confirm-modal-wrapper")
const confirmMessage = document.querySelector("#confirm-modal-message")
const confirmModal = document.querySelector("#confirm-modal")
const closeButton = document.querySelector("#stepper-header img")

const pageStepper = new Stepper(pages)
const { staffItem, serviceItem } = new Components()
const calendar = new Calendar("#date-time-wrapper", date)

render("#staff", staffItem, staff)
render("#services", serviceItem, services)
addChecked(".staff-item")
addChecked(".service-item")
addChecked(".select-time-item")


calendar.show()
pageStepper.show()
confirmCloseBtn.addEventListener("click", closeModal)
confirmModalWrapper.addEventListener("click", closeModal)
closeButton.addEventListener("click", () => location.reload())
confirmModal.addEventListener("click", (e) => e.stopPropagation())
function closeModal() {
    let control = confirmMessage.innerHTML == "Please, fill the all required fields!"
    if (!control) { location.reload() }
    confirmModalWrapper.classList.remove("active")
}


nextBtn.addEventListener("click", () => {
    pageStepper.next()
})
prevBtn.addEventListener("click", () => {
    pageStepper.prev()
})









