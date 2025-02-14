import axios from './axios'
const API1 = 'http://34.192.69.145:300'
const API2 = 'http://23.21.45.25:400'

export const registerRequest = async (user) => axios.post(`${API1}1/`, user)

export const signInRequest = async (user) => axios.post(`${API2}1/login`, user)

export const verifyTokenRequest = async () => axios.get(`${API2}1/verify`)