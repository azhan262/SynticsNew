//getting API for showing all the data
import axios from 'axios';
//export const getPlacements = () => fetch("http://localhost:7000/placements").then(res => res.json())
export const getPlacements = id => (
	console.log(id),
	axios.post(`http://localhost:7000/placements`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createPlacements = (todo) => fetch("http://localhost:7000/placements/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePlacements = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getPlacement = (id) => fetch(`http://localhost:7000/placements${id}`).then(res => res.json())
export const getPlacement = id => (
	console.log(id),
	axios.post(`http://localhost:7000/placements${id}`)
		.then(res => res.data, )
)