import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { getBikes, addBike, editBike, deleteBike } from '../../api/api';

const AdminBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', img: '', price: '', brand: '', rating: '' });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingBikeId, setEditingBikeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBikes();
        setBikes(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching bikes:", error);
        setError("An error occurred while fetching bikes.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddBike = async (e) => {
    e.preventDefault();
    // Parse price and rating as numbers
    const bikeData = { 
      ...form, 
      price: parseFloat(form.price), 
      rating: parseFloat(form.rating)
    };

    if (!bikeData.title || !bikeData.img || !bikeData.price || !bikeData.brand || !bikeData.rating) {
      setFormError("All fields are required.");
      return;
    }

    try {
      const res = await addBike(bikeData);
      setBikes((prevBikes) => [...prevBikes, res.data]);
      setForm({ title: '', img: '', price: '', brand: '', rating: '' });
      setSuccessMessage("Bike added successfully!");
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error adding bike:", error);
      setFormError("An error occurred while adding the bike.");
    }
  };

  const handleEditBike = async (e) => {
    e.preventDefault();
    try {
      const res = await editBike(editingBikeId, form);
      setBikes((prevBikes) =>
        prevBikes.map((bike) =>
          bike._id === editingBikeId ? res.data : bike
        )
      );
      setForm({ title: '', img: '', price: '', brand: '', rating: '' });
      setEditingBikeId(null);
      setIsFormVisible(false);
      setSuccessMessage("Bike updated successfully!");
    } catch (error) {
      console.error("Error editing bike:", error);
      setFormError("An error occurred while updating the bike.");
    }
  };

  const handleDeleteBike = async (id) => {
    try {
      await deleteBike(id);
      setBikes((prevBikes) => prevBikes.filter((bike) => bike._id !== id));
      setSuccessMessage("Bike deleted successfully!");
    } catch (error) {
      console.error("Error deleting bike:", error);
      setError("An error occurred while deleting the bike.");
    }
  };

  const handleEditClick = (bike) => {
    setForm({ title: bike.title, img: bike.img, price: bike.price, brand: bike.brand, rating: bike.rating });
    setEditingBikeId(bike._id);
    setIsFormVisible(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Bike Management</h1>
        <button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setEditingBikeId(null);
            setForm({ title: '', img: '', price: '', brand: '', rating: '' });
          }}
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          {isFormVisible ? "Cancel" : "Add Bike"}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={editingBikeId ? handleEditBike : handleAddBike} className="w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">{editingBikeId ? "Edit Bike" : "Add New Bike"}</h2>
          <input type="text" name="title" placeholder="Bike Title" value={form.title} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="text" name="img" placeholder="Image URL" value={form.img} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="number" name="rating" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
          <button type="submit" className="w-full p-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200">
            {editingBikeId ? "Update Bike" : "Add Bike"}
          </button>
        </form>
      )}

      {successMessage && <div className="text-green-500 text-lg">{successMessage}</div>}
      {error && <div className="text-red-500 text-lg">{error}</div>}

      <div className="w-full">
        <ul>
          {bikes.map((bike) => (
            <li key={bike._id} className="flex justify-between items-center p-4 bg-white mb-2 shadow-lg rounded-md">
              <div>
                <h3 className="font-semibold text-xl text-purple-600">{bike.title}</h3>
                <p>{bike.brand} | ${bike.price} | Rating: {bike.rating}</p>
              </div>
              <div>
                <button onClick={() => handleEditClick(bike)} className="p-2 text-yellow-500 hover:text-yellow-600">
                  <Pencil />
                </button>
                <button onClick={() => handleDeleteBike(bike._id)} className="p-2 text-red-500 hover:text-red-600">
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

export default AdminBikes;
