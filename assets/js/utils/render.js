import { selecTimeItem } from "../components/selectTimeItem.js"
import serviceItem from "../components/serviceItem.js"
import staffItem from "../components/stafftems.js"
import { data } from "../data/dummy-data.js"

export default class Renderer {

    constructor() {
        this.data = data
        this.values = {
            staff: null,
            service: null,
            date: null,
            confirm: null
        }
    }

    render(selector, childEl, data) {
        const containEl = document.querySelector(`${selector}`)
        if (containEl) {
            containEl.innerHTML = data.reduce((kod, item) => kod += childEl(item), "")
        }
    }

    addChecked(selector) {
        const elements = document.querySelectorAll(`${selector}`)
        
        elements.forEach(item => item.addEventListener("click", () => {
            elements.forEach(item=>item.classList.remove("checked"))
            item.classList.add("checked")
        }))
    }

    show() {
        const { staff, services, times } = this.data
        this.render("#staff", staffItem, staff)
        this.render("#services", serviceItem, services)
        this.render(".select-time-items", selecTimeItem, times)
        this.addChecked(".staff-item")
        this.addChecked(".service-item")
        this.addChecked(".select-time-item")
    }

}

