import { Catcher } from "./cather.js"
import { data } from "../data/dummy-data.js";

export default class Stepper {
    constructor(steps) {
        this.step = 0
        this.steps = Array.from(steps)
    }

    next() {
        const catcher = new Catcher();
        const control = Object.values(catcher.validations())[this.step]
        const errorbox = document.querySelector("#error-box")
        const confirmModal = document.querySelector("#confirm-modal-wrapper")
        const confirmMessage = document.querySelector("#confirm-modal-message")

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
        }
        else this.error()
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
        const errorbox = document.querySelector("#error-box")
        const errormessage = document.querySelector("#error-message")
        const activeStep = document.querySelector(".menu-item.active p")
        if (this.step < 3) {
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
        const backBtn = document.querySelector("#btn-prev")
        const menuItems = document.querySelectorAll(".menu-item")
        let confirmList = document.querySelector("#confirm-list")
        this.step > 0 ? backBtn.classList.add('active') : backBtn.classList.remove('active')
      
        if (this.step == 3) {
            const info = this.getData()
            const staff = data.staff.find(item => item.id == info.staff_id).name
            const service = data.services.find(item => item.id == info.sevices_id)
            const time = data.times.find(item => item.start_time == info.time)
            confirmList.innerHTML = `
            <li>
                <span>Staff:</span>
                ${staff}
            </li>
            <li>
                <span>Service:</span> 
                ${service.name}
            </li>
            <li>
                <span>Date:</span>
                ${info.date}/${time.start_time}-${time.end_time}
            </li>
            <li>
                <span>Total:</span>
                <span id="total">${service.price}$</span>
            </li>
            `
        }

        this.stepController(this.steps)
        this.stepController(menuItems)
        const title = document.querySelector("#stepper-header h3")
        const activeStep = document.querySelector(".menu-item.active p")
        title.innerHTML = activeStep && `Select ${activeStep.innerHTML.toLowerCase()}`
        this.getData()
    }
}