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

    betterActiveDays() {
        return {
            days: this.activeDays.map(item => parseInt(item.slice(-2)))
        }
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
        const calendarBottom = document.querySelector(`${this.selector} .calendar-bottom`)
        const monthDays = Array.from({ length: LastDay.getDate() })
            .reduce((kod, _, index) => {
                if (this.betterActiveDays().days.includes(index + 1)) {
                    return kod +=
                        `<div class="month-day active">
                     <div class="flex-center">${index + 1}</div>
                </div>`
                } else {
                    return kod +=
                        `<div class="month-day">
                     <div class="flex-center">${index + 1}</div>
                </div>`
                }


            }, "")

        calendarBottom.innerHTML = monthDays
    }

    show() {
        this.createMonth()
        this.createTop()
        this.createBottom()

        const anglePrev = document.querySelector(`${this.selector} .angle-prev`)
        const angleNext = document.querySelector(`${this.selector} .angle-next`)
        const activeDays = document.querySelectorAll(`${this.selector} .month-day.active`)

        activeDays.forEach(item => {

            item.addEventListener("click", () => {
                activeDays.forEach(item => item.classList.remove("checked"));
                item.classList.add('checked');
            })
        });


        anglePrev.addEventListener('click', () => this.changeMonth(false))
        angleNext.addEventListener('click', () => this.changeMonth(true))

        // console.log(this.betterActiveDays());
    }


}
