const serviceItem = (data) => {
    return (
        `<div class="service-item flex-between">
             <div class="flex-items-center">
                <img src="./assets/img/${data.image}"/>
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.duration}</p>
                </div>
            </div>
            <span>${data.price}$</span>
         </div>`
    )
}

export default serviceItem
