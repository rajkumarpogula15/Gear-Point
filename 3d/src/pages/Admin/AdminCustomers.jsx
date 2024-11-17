import React, { useEffect, useState } from 'react';
import { Trash } from 'lucide-react';
import { getUsers, deleteCustomer, addCustomer } from '../../api/api';
import { toast } from 'sonner';

const AdminCustomer = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        if (res.status === 200) {
          setUsers(Array.isArray(res.data) ? res.data : []);
        } else {
          setError('Failed to load users.');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('An error occurred while fetching users.');
        toast.error('Failed to fetch users.');
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await deleteCustomer(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      toast.success('Customer deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('An error occurred while deleting the user.');
      toast.error('Failed to delete user.');
    }
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setFormError('Name and email are required.');
      toast.error('Name and email are required.');
      return;
    }

    try {
      const res = await addCustomer(form);
      if (res.status === 201) {
        setUsers((prevUsers) => [...prevUsers, res.data]);
        toast.success('Customer added successfully!');
        setForm({ name: '', email: '' });
        setIsModalVisible(false);
      } else {
        toast.error('Failed to add customer.');
      }
    } catch (error) {
      console.error('Error adding customer:', error);
      toast.error('An error occurred while adding the customer.');
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setForm({ name: '', email: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Customer Management</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-transform duration-200 transform hover:scale-105"
        >
          Add Customer
        </button>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add New Customer</h2>
            <form onSubmit={handleAddCustomer}>
              <input
                type="text"
                name="name"
                placeholder="Customer Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Customer Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
              />
              {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
              <button
                type="submit"
                className="w-full p-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-transform duration-200 transform hover:scale-105"
              >
                Add Customer
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 w-full text-red-600 hover:text-red-700 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="w-full">
        <ul>
          {users.map((user) => (
            <li key={user._id} className="flex justify-between items-center p-4 bg-white mb-2 shadow-lg rounded-md">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
                <p className="text-gray-700">{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="p-2 text-red-600 hover:text-red-700"
                >
                  <Trash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminCustomer;
