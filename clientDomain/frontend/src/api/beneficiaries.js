import axios from './axios'
const API1 = 'http://localhost:500'

export const registerBeneficiary = async (user) => axios.post(`${API1}1/`, user)

export const listBeneficiaries = async (user) => axios.post(`${API1}1/login`, user)