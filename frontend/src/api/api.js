import axios from 'axios';

const API = 'http://localhost:3000';

// Product APIs
const getProducts = () => axios.get(`${API}/products/all`);
const addProduct = (productData) => axios.post(`${API}/products/add`, productData);
const editProduct = (id, updatedData) => axios.put(`${API}/products/edit/${id}`, updatedData);
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`);

// Order APIs
const getOrders = () => axios.get(`${API}/orders/all`);
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`);

// User APIs
const getUsers = () => axios.get(`${API}/users/all`);
const deleteCustomer = (id) => axios.delete(`${API}/users/delete/${id}`);
const Login = (credentials) => axios.post(`${API}/users/login`, credentials);
const Register = (credentials) => axios.post(`${API}/users/register`, credentials);
const addCustomer = (customerData) => axios.post(`${API}/users/add`, customerData);

export { getProducts, addProduct, editProduct, deleteProduct, getOrders, deleteOrder,
         getUsers, deleteCustomer, addCustomer, Login, Register };


