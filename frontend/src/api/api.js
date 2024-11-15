import axios from 'axios';

const API = 'http://localhost:3000';

// Bike APIs
const getBikes = () => axios.get(`${API}/bikes/all`);
const addBike = (bikeData) => axios.post(`${API}/bikes/add`, bikeData);
const editBike = (id, updatedData) => axios.put(`${API}/bikes/edit/${id}`, updatedData);
const deleteBike = (id) => axios.delete(`${API}/bikes/delete/${id}`);

// Order APIs
const getOrders = () => axios.get(`${API}/orders/all`);
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`);

// User APIs
const getUsers = () => axios.get(`${API}/users/all`);
const deleteCustomer = (id) => axios.delete(`${API}/users/delete/${id}`);
const Login = (credentials) => axios.post(`${API}/users/login`, credentials);
const Register = (credentials) => axios.post(`${API}/users/register`, credentials);
const addCustomer = (customerData) => axios.post(`${API}/users/add`, customerData);

export { getBikes, addBike, editBike, deleteBike, getOrders, deleteOrder,
         getUsers, deleteCustomer, addCustomer, Login, Register };
