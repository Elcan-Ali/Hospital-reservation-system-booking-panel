const render = (containEl, childEl, data) => {
    if (containEl) {
        containEl.innerHTML = data.reduce((kod, item) => kod += childEl(item), "")
    }
}
export default render