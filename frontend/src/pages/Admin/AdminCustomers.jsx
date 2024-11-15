import React, { useEffect, useState } from 'react';
import { Trash, Plus } from 'lucide-react';
import { getUsers, deleteCustomer, addCustomer } from '../../api/api';

const AdminCustomer = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        if (res.status === 200) {
          setUsers(Array.isArray(res.data) ? res.data : []);
        } else {
          setError("Failed to load users.");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("An error occurred while fetching users.");
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await deleteCustomer(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      setSuccessMessage("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("An error occurred while deleting the user.");
    }
  };

  const handleAddCustomer = async () => {
    try {
      const res = await addCustomer(newCustomer);
      if (res.status === 201) {
        setUsers((prevUsers) => [...prevUsers, res.data]);
        setSuccessMessage("Customer added successfully!");
        setNewCustomer({ name: '', email: '' });
        setIsModalOpen(false);
      } else {
        setError("Failed to add customer.");
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      setError("An error occurred while adding the customer.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Customer Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-all"
        >
          <Plus className="mr-2" /> Add Customer
        </button>
      </div>
      
      {successMessage && <p className="mb-4 text-green-500">{successMessage}</p>}
      
      <table className="w-full border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-purple-600 text-white text-left">
          <tr>
            <th className="p-4">User ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="4" className="p-6 text-center text-red-500">{error}</td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-6 text-center text-gray-500">No Customers Available</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id} className="hover:bg-purple-50 transition-colors">
                <td className="p-4 border-t border-gray-200">{user._id}</td>
                <td className="p-4 border-t border-gray-200">{user.name}</td>
                <td className="p-4 border-t border-gray-200">{user.email}</td>
                <td className="p-4 border-t border-gray-200 flex justify-center gap-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Add New Customer</h2>
            <input
              type="text"
              placeholder="Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Add Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCustomer;
