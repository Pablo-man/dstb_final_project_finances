import axios from './axios'
const API1 = 'http://localhost:300'
const API2 = 'http://localhost:400'

export const registerRequest = async (user) => axios.post(`${API1}1/`, user)

export const signInRequest = async (user) => axios.post(`${API2}1/login`, user)

export const verifyTokenRequest = async () => axios.get(`${API2}1/verify`)