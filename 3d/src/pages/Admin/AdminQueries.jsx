import React, { useEffect, useState } from 'react';
import { MessageSquareReply, Trash } from 'lucide-react';
import { getQueries, addQuery, editQuery, deleteQuery } from '../../api/api';
import { toast } from 'sonner';

const AdminQueries = () => {
  const [queries, setQueries] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingQueryId, setEditingQueryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getQueries();
        setQueries(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching queries:", error);
        setError("An error occurred while fetching queries.");
        toast.error("An error occurred while fetching queries.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddQuery = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFormError("All fields are required.");
      toast.error("All fields are required.");
      return;
    }

    try {
      const res = await addQuery(form);
      setQueries((prevQueries) => [...prevQueries, res.data]);
      setForm({ name: '', email: '', message: '' });
      toast.success("Query added successfully!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding query:", error);
      setFormError("An error occurred while adding the query.");
      toast.error("An error occurred while adding the query.");
    }
  };

  const handleEditQuery = async (e) => {
    e.preventDefault();
    try {
      const res = await editQuery(editingQueryId, form);
      setQueries((prevQueries) =>
        prevQueries.map((query) =>
          query._id === editingQueryId ? res.data : query
        )
      );
      setForm({ name: '', email: '', message: '' });
      setEditingQueryId(null);
      toast.success("Query updated successfully!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error editing query:", error);
      setFormError("An error occurred while updating the query.");
      toast.error("An error occurred while updating the query.");
    }
  };

  const handleDeleteQuery = async (id) => {
    try {
      await deleteQuery(id);
      setQueries((prevQueries) => prevQueries.filter((query) => query._id !== id));
      toast.success("Query deleted successfully!");
    } catch (error) {
      console.error("Error deleting query:", error);
      setError("An error occurred while deleting the query.");
      toast.error("An error occurred while deleting the query.");
    }
  };

  const handleEditClick = (query) => {
    setForm({ name: query.name, email: query.email, message: query.message });
    setEditingQueryId(query._id);
    setIsModalVisible(true);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setForm({ name: '', email: '', message: '' });
    setEditingQueryId(null);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Query Management</h1>
        
      </div>

      

      <div className="w-full">
        <ul>
          {queries.map((query) => (
            <li key={query._id} className="flex justify-between items-center p-4 bg-gray-50 mb-2 shadow-lg rounded-md">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{query.name}</h3>
                <p className="text-gray-600">{query.email}</p>
                <p className="text-gray-600">{query.message}</p>
              </div>
              <div>
                <button onClick={() => handleDeleteQuery(query._id)} className="p-2 text-red-500 hover:text-red-600">
                  <Trash />
                </button>
                <button className="p-2 text-green-700 hover:text-green-950">
                <MessageSquareReply />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminQueries;
