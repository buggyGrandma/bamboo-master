import axios from "axios"

export const AXIOS = axios.create({
	baseURL: "http://185.19.201.5:1000/",
	timeout: 20000
})
