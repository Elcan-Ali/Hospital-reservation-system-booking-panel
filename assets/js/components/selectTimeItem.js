export const selecTimeItem = (data) => {
    return (`<div class="select-time-item flex">
                <span>${data.start_time}</span>
                <span>${data.end_time}</span>
            </div>`)
}