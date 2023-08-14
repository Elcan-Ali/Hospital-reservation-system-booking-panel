import { data } from "../data/dummy-data.js"
import { addChecked } from "../utils/addChecked.js"
import { render } from "../utils/render.js"
import Components from "./components.js"

export default class Calendar {
    constructor(selector, activeDays) {
        this.selector = selector
        this.activeDays = activeDays
        this.element = document.querySelector(`${selector}`)
        this.today = new Date()
        this.year = this.today.getFullYear()
        this.month = this.today.getMonth()
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }

    createMonth() {
        const time = document.querySelector(`${this.selector} .month-year`)
        time.innerHTML = `<button class="angle-prev">
                             <img src="./assets/img/angle-left.svg" alt="angle-left"/>
                          </button>
                          <h3>${this.months[this.month]} ${this.year}</h3>
                          <button class="angle-next">
                            <img src="./assets/img/angle-right.svg" alt="agle-right" />
                          </button>`
    }

    changeMonth(paramater) {
        if (paramater && this.month < 11) this.month += 1
        else if (!paramater && this.month > 0) this.month -= 1
        this.show()
    }

    createTop() {
        const calendarTop = document.querySelector(`${this.selector} .calendar-top`)
        const weekDays = this.weekDays.reduce((kod, item) => kod += `<div class="week-day">${item}</div>`, "")
        calendarTop.innerHTML = weekDays
    }

    createBottom() {
        const LastDay = new Date(this.year, this.month + 1, 0)
        const firstDay = new Date(this.year, this.month, 1)
        const days = []

        for (let i = firstDay.getDate(); i <= LastDay.getDate(); i++) {
            let date;
            i == LastDay.getDate()
                ? date = new Date(this.year, this.month + 1, 0)
                : date = new Date(this.year, this.month + 1, i)
            days.push({ date: date.getDate(), month: date.getMonth(), year: date.getFullYear() })
        }

        const calendarBottom = document.querySelector(`${this.selector} .calendar-bottom`)
        let monthDays = Array.from({ length: firstDay.getDay() })
            .reduce((kod, _, index) => {
                return kod +=
                    `<div class="month-day">
                        <div class="flex-center"></div>
                    </div>`
            }, "")
            + days.reduce((kod, item, index) => {
                const checkTime = `${item.year}-${item.month < 10 ? `0${item.month}` : item.month}-${item.date < 10 ? `0${item.date}` : item.date}`
                if (this.activeDays.includes(`${checkTime}`)) {
                    return kod +=
                        `<div class="month-day active">
                               <div class="flex-center" data-key="${checkTime}">${item.date}</div>
                        </div>`
                } else {
                    return kod +=
                        `<div class="month-day">
                              <div class="flex-center" data-key="${index + 1}">${item.date}</div>
                        </div>`
                }
            }, "")

        calendarBottom.innerHTML = monthDays
    }

    show() {
        this.createMonth()
        this.createTop()
        this.createBottom()

        const { selecTimeItem } = new Components()
        const selectTimesEl = document.querySelector(".select-time-items")
        const anglePrev = document.querySelector(`${this.selector} .angle-prev`)
        const angleNext = document.querySelector(`${this.selector} .angle-next`)
        const activeDays = document.querySelectorAll(`${this.selector} .month-day.active`)

        activeDays.forEach(item => {
            item.addEventListener("click", () => {
                activeDays.forEach(item => item.classList.remove("checked"));
                item.classList.add('checked');
            })
        });

        const activeClickableDays = document.querySelectorAll(".month-day.active div")
        const selectDate = document.querySelector("#select-time-top h3")
        const { times } = data

        activeClickableDays.forEach((item, index) => {
            item.addEventListener("click", () => {
                selectDate.innerHTML = item.getAttribute("data-key")
                render(".select-time-items", selecTimeItem, times)
                addChecked(".select-time-item")
            })
        })

        anglePrev.addEventListener('click', () => this.changeMonth(false))
        angleNext.addEventListener('click', () => this.changeMonth(true))
    }
}
