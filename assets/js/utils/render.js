export function render(selector, childEl, data) {
    const containEl = document.querySelector(`${selector}`)
    if (containEl) containEl.innerHTML = data.reduce((kod, item) => kod += childEl(item), "")
}
