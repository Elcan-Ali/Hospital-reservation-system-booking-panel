export default class Components {

    staffItem = (data) => {
        return (
            `<div class="staff-item flex-items-center">
                <img src="./assets/img/${data.image}"/>
                <div>
                    <h3 data-key="${data.id}">${data.name}</h3>
                    <p>${data.email}</p>
                </div>
             </div>`
        )
    }

    serviceItem(data) {
        return (
            `<div class="service-item flex-between">
                 <div class="flex-items-center">
                    <img src="./assets/img/${data.image}"/>
                    <div>
                        <h3 data-key="${data.id}" >${data.name}</h3>
                        <p>${data.duration}</p>
                    </div>
                </div>
                <span>${data.price}$</span>
             </div>`
        )
    }

    selecTimeItem = (data) => {
        return (`<div class="select-time-item flex">
                    <span data-key="${data.start_time}" >${data.start_time}</span>
                    <span>${data.end_time}</span>
                </div>`)
    }


}