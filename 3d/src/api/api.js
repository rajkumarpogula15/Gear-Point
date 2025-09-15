import axios from "axios";

// ------------------- Axios Instance -------------------
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to production URL when deploying
});

// ✅ Automatically attach JWT token for every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ------------------- Bike APIs -------------------
export const getBikes = () => API.get("/bikes/all");
export const addBike = (bikeData) => API.post("/bikes/add", bikeData);
export const editBike = (id, updatedData) =>
  API.put(`/bikes/edit/${id}`, updatedData);
export const deleteBike = (id) => API.delete(`/bikes/delete/${id}`);

// ------------------- Accessory APIs -------------------
export const getAccessories = () => API.get("/accessories/all");
export const addAccessory = (accessoryData) =>
  API.post("/accessories/add", accessoryData);
export const editAccessory = (id, updatedData) =>
  API.put(`/accessories/edit/${id}`, updatedData);
export const deleteAccessory = (id) =>
  API.delete(`/accessories/delete/${id}`);

// ------------------- Order APIs -------------------

// ✅ Admin-only APIs
export const getOrders = () => API.get("/orders/all");
export const deleteOrder = (id) => API.delete(`/orders/delete/${id}`);
export const editOrder = (id, updatedData) =>
  API.put(`/orders/edit/${id}`, updatedData);

// ✅ Add a new order (for logged-in user)
export const addOrder = (orderData) => API.post("/orders/add", orderData);

// ✅ Fetch logged-in user's own orders (requires JWT)
export const getUserOrders = () => API.get("/orders/user");

// ------------------- User APIs -------------------
export const getUsers = () => API.get("/users/all");
export const addCustomer = (customerData) => API.post("/users/add", customerData);
export const deleteCustomer = (id) => API.delete(`/users/delete/${id}`);
export const Login = (credentials) => API.post("/auth/login", credentials);
export const Register = (credentials) => API.post("/auth/register", credentials);

// ------------------- Query APIs -------------------
export const getQueries = () => API.get("/queries/all");
export const addQuery = (queryData) => API.post("/queries/add", queryData);
export const editQuery = (id, updatedData) =>
  API.put(`/queries/edit/${id}`, updatedData);
export const deleteQuery = (id) => API.delete(`/queries/delete/${id}`);
