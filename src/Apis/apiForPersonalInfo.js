//getting API for showing all the data
import axios from 'axios';
//export const getPersonalInfos = () => fetch("http://localhost:7000/").then(res => res.json())
export const getPersonalInfos = id => (
	console.log(id),
	axios.post(`http://localhost:7000/`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createPersonalInfos= (todo) => fetch("http://localhost:7000/personalinfos/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePersonalInfos = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getPersonalInfo = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getPersonalInfo = id => (
	console.log(id),
	axios.post(`http://localhost:7000/${id}`)
		.then(res => res.data, )
)