//getting API for showing all the data
import axios from 'axios';

//export const getRegistrations = () => fetch("http://localhost:7000/").then(res => res.json())
export const getRegistrations = id => (
	console.log(id),
	axios.post(`http://localhost:7000/`)
		.then(res => res.data, )
)

//getting API for inserting the data
export const createRegistrations = (todo) => fetch("http://localhost:7000/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistrations = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getRegisterationStudents = (id) => fetch(`http://localhost:7000/students/specific/${id}`).then(res => res.json())
export const getRegisterationStudents = id => (
	console.log(id),
	axios.post(`http://localhost:7000/students/specific/${id}`)
		.then(res => res.data, )
		
)
export const getRegisterationStudentsById = id => (
	console.log(id),
	axios.post(`http://localhost:7000/students/specific/id/${id}`)
		.then(res => res.data, )
)
//export const getRegisterationStudentsById = (id) => fetch(`http://localhost:7000/students/specific/id/${id}`).then(res => res.json())