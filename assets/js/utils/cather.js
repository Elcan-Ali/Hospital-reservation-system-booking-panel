export class Catcher {

    checkedValidation(selector) {
        const items = document.querySelectorAll(`${selector}`);
        return [...items].some(item => item.classList.contains("checked"))
    }

    formValidation() {
        const inputs = document.querySelectorAll(".confirm-input.required input")
        return [...inputs].some(item => console.log(item.value === ""))
    }
    
    validations() {
        return {
            staff: this.checkedValidation(".staff-item"),
            service: this.checkedValidation(".service-item"),
            date: this.checkedValidation(".select-time-item"),
            confirm: this.formValidation()
        }
    }


}