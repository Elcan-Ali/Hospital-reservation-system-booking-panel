import { data } from "./data/dummy-data.js"
import render from "./utils/render.js"
import staffItem from "./components/stafftems.js"
import serviceItem from "./components/serviceItem.js"

const { staff, services } = data

const staffEl = document.querySelector("#staff")
const serviceEl = document.querySelector("#services")


render(staffEl, staffItem, staff)
render(serviceEl, serviceItem, services )






