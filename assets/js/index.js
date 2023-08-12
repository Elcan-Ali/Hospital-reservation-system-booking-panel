import { data } from "./data/dummy-data.js"
import render from "./utils/render.js"
import staffItem from "./components/stafftems.js"
import serviceItem from "./components/serviceItem.js"
import Stepper from "./components/stepper.js"
import Calendar from "./components/calendar.js"

const { staff, services } = data
const staffEl = document.querySelector("#staff")
const serviceEl = document.querySelector("#services")
const prevBtn = document.querySelector("#btn-prev")
const nextBtn = document.querySelector("#btn-next")
const pages = document.querySelectorAll(".page")
const menuItems = document.querySelectorAll(".menu-item")

const pageStepper = new Stepper(pages)
const menuStepper = new Stepper(menuItems)
const calendar = new Calendar("#date-time-wrapper")

pageStepper.show()
menuStepper.show()
calendar.show()



nextBtn.addEventListener("click", () => {
    pageStepper.next()
    menuStepper.next()
})
prevBtn.addEventListener("click", () => {
    menuStepper.prev()
    pageStepper.prev()
})


render(staffEl, staffItem, staff)
render(serviceEl, serviceItem, services)







