import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { getAccessories, addAccessory, editAccessory, deleteAccessory } from '../../api/api';

const AdminAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', img: '', price: '', category: '', brand: '', stock: '', rating: '' });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingAccessoryId, setEditingAccessoryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAccessories();
        setAccessories(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching accessories:", error);
        setError("An error occurred while fetching accessories.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddAccessory = async (e) => {
    e.preventDefault();
    const accessoryData = {
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      rating: parseFloat(form.rating),
    };

    if (!accessoryData.name || !accessoryData.img || !accessoryData.price || !accessoryData.category || !accessoryData.brand || !accessoryData.stock || !accessoryData.rating) {
      setFormError("All fields are required.");
      return;
    }

    try {
      const res = await addAccessory(accessoryData);
      setAccessories((prevAccessories) => [...prevAccessories, res.data]);
      setForm({ name: '', img: '', price: '', category: '', brand: '', stock: '', rating: '' });
      setSuccessMessage("Accessory added successfully!");
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error adding accessory:", error);
      setFormError("An error occurred while adding the accessory.");
    }
  };

  const handleEditAccessory = async (e) => {
    e.preventDefault();
    try {
      const res = await editAccessory(editingAccessoryId, form);
      setAccessories((prevAccessories) =>
        prevAccessories.map((accessory) =>
          accessory._id === editingAccessoryId ? res.data : accessory
        )
      );
      setForm({ name: '', img: '', price: '', category: '', brand: '', stock: '', rating: '' });
      setEditingAccessoryId(null);
      setIsFormVisible(false);
      setSuccessMessage("Accessory updated successfully!");
    } catch (error) {
      console.error("Error editing accessory:", error);
      setFormError("An error occurred while updating the accessory.");
    }
  };

  const handleDeleteAccessory = async (id) => {
    try {
      await deleteAccessory(id);
      setAccessories((prevAccessories) => prevAccessories.filter((accessory) => accessory._id !== id));
      setSuccessMessage("Accessory deleted successfully!");
    } catch (error) {
      console.error("Error deleting accessory:", error);
      setError("An error occurred while deleting the accessory.");
    }
  };

  const handleEditClick = (accessory) => {
    setForm({ 
      name: accessory.name, 
      img: accessory.img, 
      price: accessory.price, 
      category: accessory.category, 
      brand: accessory.brand, 
      stock: accessory.stock, 
      rating: accessory.rating 
    });
    setEditingAccessoryId(accessory._id);
    setIsFormVisible(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Accessory Management</h1>
        <button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setEditingAccessoryId(null);
            setForm({ name: '', img: '', price: '', category: '', brand: '', stock: '', rating: '' });
          }}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {isFormVisible ? "Cancel" : "Add Accessory"}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={editingAccessoryId ? handleEditAccessory : handleAddAccessory} className="w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{editingAccessoryId ? "Edit Accessory" : "Add New Accessory"}</h2>
          <input type="text" name="name" placeholder="Accessory Name" value={form.name} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="img" placeholder="Image URL" value={form.img} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" name="rating" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
          <button type="submit" className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">
            {editingAccessoryId ? "Update Accessory" : "Add Accessory"}
          </button>
        </form>
      )}

      {successMessage && <div className="text-green-500 text-lg">{successMessage}</div>}
      {error && <div className="text-red-500 text-lg">{error}</div>}

      <div className="w-full">
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory._id} className="flex justify-between items-center p-4 bg-white mb-2 shadow-lg rounded-md">
              <div>
                <h3 className="font-semibold text-xl text-blue-600">{accessory.name}</h3>
                <p>{accessory.brand} | ${accessory.price} | Stock: {accessory.stock} | Rating: {accessory.rating}</p>
              </div>
              <div>
                <button onClick={() => handleEditClick(accessory)} className="p-2 text-yellow-500 hover:text-yellow-600">
                  <Pencil />
                </button>
                <button onClick={() => handleDeleteAccessory(accessory._id)} className="p-2 text-red-500 hover:text-red-600">
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

export default AdminAccessories;
