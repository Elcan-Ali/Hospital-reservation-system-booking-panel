import { Catcher } from "./cather.js"
import { data } from "../data/dummy-data.js";

const catcher = new Catcher();
const backBtn = document.querySelector("#btn-prev")
const nextBtn = document.querySelector("#btn-next")
const errorbox = document.querySelector("#error-box")
const menuItems = document.querySelectorAll(".menu-item")
const title = document.querySelector("#stepper-header h3")
const errormessage = document.querySelector("#error-message")
const confirmModal = document.querySelector("#confirm-modal-wrapper")
const confirmMessage = document.querySelector("#confirm-modal-message")




export default class Stepper {
    constructor(steps) {
        this.step = 0
        this.steps = Array.from(steps)
    }

    next() {
        const control = Object.values(catcher.validations())[this.step]
        if (this.step == 3) {
            confirmModal.classList.add("active")
            if (!control) {
                confirmModal.classList.add('success')
                confirmMessage.innerHTML = "Confirmation successfully completed!"
                console.log(this.getData());
            } else {
                confirmModal.classList.remove('success')
                confirmMessage.innerHTML = "Please, fill the all required fields!"
            }
        }

        if (control && this.step < 3) {
            this.step += 1
            errorbox.classList.remove("active")
        } else this.error()
        this.show()
    }

    prev() {
        if (this.step > 0) this.step -= 1
        this.show()
    }

    getData() {
        const pages = document.querySelectorAll('.page .checked [data-key]');
        const inputs = document.querySelectorAll('input');
        let formData = {};
        inputs.forEach((item) => formData = { ...formData, [item.name]: item.value })
        const keys = [...pages].map(item => item.getAttribute("data-key"))
        let formattedData = {
            customer: formData,
            staff_id: keys[0],
            sevices_id: keys[1],
            date: keys[2],
            time: keys[3]
        }
        return formattedData
    }

    error() {
        if (this.step < 3) {
            const activeStep = document.querySelector(".menu-item.active p")
            errorbox.classList.add("active")
            errormessage.innerHTML = `select ${activeStep.innerHTML}`
        }
    }

    stepController(arr) {
        arr.forEach((item, index) => {
            item.classList.remove("active")
            item.classList.remove("checked")
            if (index < this.step) item.classList.add("checked")
        })
        arr[this.step].classList.add("active")
    }

    show() {
        const confirmList = document.querySelector("#confirm-list")
        this.step > 0 ? backBtn.classList.add('active') : backBtn.classList.remove('active')

        if (this.step == 3) {
            const info = this.getData()
            const staff = data.staff.find(item => item.id == info.staff_id).name
            const service = data.services.find(item => item.id == info.sevices_id)
            const time = data.times.find(item => item.start_time == info.time)
            nextBtn.innerHTML = "Confirm Booking"
            const confirmData = [
                { title: "Staff", text: staff },
                { title: "Service", text: service.name },
                { title: "Date", text: `${info.date}/${time.start_time}-${time.end_time}` },
                { title: "Total", text: service.price },
            ]
            confirmList.innerHTML = confirmData.reduce((kod, item) => {
                return kod += ` <li>
                                   <span>${item.title}: </span>
                                   ${item.text}
                                </li>`}, "")
        }

        this.stepController(this.steps)
        this.stepController(menuItems)

        const activeStep = document.querySelector(".menu-item.active p")
        title.innerHTML = activeStep.innerHTML !== 'Confirmation' ? `Select ${activeStep.innerHTML.toLowerCase()}` : activeStep.innerHTML

        this.getData()
    }
}