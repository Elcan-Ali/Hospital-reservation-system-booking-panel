export default class Calendar {
    constructor(selector) {
        this.selector = selector
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
                          <h3>${this.months[this.month]}</h3>
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
            .reduce((kod, _, index) => kod +=
                `<div class="month-day">
                     <div class="flex-center">${index + 1}</div>
                </div>`, "")

        calendarBottom.innerHTML = monthDays
    }

    show() {
        this.createMonth()
        this.createTop()
        this.createBottom()

        const anglePrev = document.querySelector(`${this.selector} .angle-prev`)
        const angleNext = document.querySelector(`${this.selector} .angle-next`)
            
        anglePrev.addEventListener('click', () => this.changeMonth(false))
        angleNext.addEventListener('click', () => this.changeMonth(true))
    }




}
