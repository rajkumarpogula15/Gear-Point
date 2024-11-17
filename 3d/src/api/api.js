import axios from 'axios';

const API = 'http://localhost:3000';

// Bike APIs
const getBikes = () => axios.get(`${API}/bikes/all`);
const addBike = (bikeData) => axios.post(`${API}/bikes/add`, bikeData);
const editBike = (id, updatedData) => axios.put(`${API}/bikes/edit/${id}`, updatedData);
const deleteBike = (id) => axios.delete(`${API}/bikes/delete/${id}`);

// Accessory APIs
const getAccessories = () => axios.get(`${API}/accessories/all`);
const addAccessory = (accessoryData) => axios.post(`${API}/accessories/add`, accessoryData);
const editAccessory = (id, updatedData) => axios.put(`${API}/accessories/edit/${id}`, updatedData);
const deleteAccessory = (id) => axios.delete(`${API}/accessories/delete/${id}`);

// Order APIs
const getOrders = () => axios.get(`${API}/orders/all`);
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`);

// User APIs
const getUsers = () => axios.get(`${API}/users/all`);
const deleteCustomer = (id) => axios.delete(`${API}/users/delete/${id}`);
const Login = (credentials) => axios.post(`${API}/users/login`, credentials);
const Register = (credentials) => axios.post(`${API}/users/register`, credentials);
const addCustomer = (customerData) => axios.post(`${API}/users/add`, customerData);

// Query APIs
const getQueries = () => axios.get(`${API}/queries/all`);
const addQuery = (queryData) => axios.post(`${API}/queries/add`, queryData);
const editQuery = (id, updatedData) => axios.put(`${API}/queries/edit/${id}`, updatedData);
const deleteQuery = (id) => axios.delete(`${API}/queries/delete/${id}`);

export {
  getBikes,
  addBike,
  editBike,
  deleteBike,
  getAccessories,
  addAccessory,
  editAccessory,
  deleteAccessory,
  getOrders,
  deleteOrder,
  getUsers,
  deleteCustomer,
  addCustomer,
  Login,
  Register,
  getQueries,
  addQuery,
  editQuery,
  deleteQuery
};
