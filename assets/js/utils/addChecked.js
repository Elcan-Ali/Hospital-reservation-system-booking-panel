export function addChecked(selector) {
    const elements = document.querySelectorAll(`${selector}`)
    elements.forEach(item => item.addEventListener("click", () => {
        elements.forEach(item => item.classList.remove("checked"))
        item.classList.add("checked")
    }))
}