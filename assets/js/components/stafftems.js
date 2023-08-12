const staffItem = (data) => {
    return (
        `<div class="staff-item flex-items-center">
            <img src="./assets/img/${data.image}"/>
            <div>
                <h3>${data.name}</h3>
                <p>${data.email}</p>
            </div>
         </div>`
    )
}

export default staffItem