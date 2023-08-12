class Calendar {
    constructor() {
        this.today = new Date()
        this.year = this.today.getFullYear()
        this.month = this.today.getMonth()
        this.firstDay = new Date(this.year, this.month, 1)
        this.LastDay = new Date(this.year, this.month + 1, 0)
        this.todayDate = this.today.getDate()
        this.firstDate = this.firstDay.getDate()
        this.LastDate = this.LastDay.getDate()
        this.months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
        this.weeksDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }

    generateDay() {
        const days = []
        for (let i = this.firstDate; i <= this.LastDate; i++) { days.push(i) }
        return days
    }


    create(element) {
        return (
            ``
        )

    }

}
console.log(new Calendar().generateDay());