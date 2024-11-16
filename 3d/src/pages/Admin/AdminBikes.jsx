import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { getBikes, addBike, editBike, deleteBike } from '../../api/api';
import { toast } from 'sonner';

const AdminBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', img: '', price: '', brand: '', rating: '' });
  const [formError, setFormError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBikeId, setEditingBikeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBikes();
        setBikes(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching bikes:", error);
        setError("An error occurred while fetching bikes.");
        toast.error("An error occurred while fetching bikes.");
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
    const bikeData = { 
      ...form, 
      price: parseFloat(form.price), 
      rating: parseFloat(form.rating)
    };

    if (!bikeData.title || !bikeData.img || !bikeData.price || !bikeData.brand || !bikeData.rating) {
      setFormError("All fields are required.");
      toast.error("All fields are required.");
      return;
    }

    try {
      const res = await addBike(bikeData);
      setBikes((prevBikes) => [...prevBikes, res.data]);
      setForm({ title: '', img: '', price: '', brand: '', rating: '' });
      toast.success("Bike added successfully!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding bike:", error);
      setFormError("An error occurred while adding the bike.");
      toast.error("An error occurred while adding the bike.");
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
      toast.success("Bike updated successfully!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error editing bike:", error);
      setFormError("An error occurred while updating the bike.");
      toast.error("An error occurred while updating the bike.");
    }
  };

  const handleDeleteBike = async (id) => {
    try {
      await deleteBike(id);
      setBikes((prevBikes) => prevBikes.filter((bike) => bike._id !== id));
      toast.success("Bike deleted successfully!");
    } catch (error) {
      console.error("Error deleting bike:", error);
      setError("An error occurred while deleting the bike.");
      toast.error("An error occurred while deleting the bike.");
    }
  };

  const handleEditClick = (bike) => {
    setForm({ title: bike.title, img: bike.img, price: bike.price, brand: bike.brand, rating: bike.rating });
    setEditingBikeId(bike._id);
    setIsModalVisible(true);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setForm({ title: '', img: '', price: '', brand: '', rating: '' });
    setEditingBikeId(null);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Bike Management</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-transform duration-200 transform hover:scale-105"
        >
          Add Bike
        </button>
      </div>
  
      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{editingBikeId ? "Edit Bike" : "Add New Bike"}</h2>
            <form onSubmit={editingBikeId ? handleEditBike : handleAddBike}>
              <input
                type="text"
                name="title"
                placeholder="Bike Title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                value={form.img}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={form.brand}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={form.rating}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
              <button
                type="submit"
                className="w-full p-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-transform duration-200 transform hover:scale-105"
              >
                {editingBikeId ? "Update Bike" : "Add Bike"}
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
          {bikes.map((bike) => (
            <li key={bike._id} className="flex justify-between items-center p-4 bg-gray-50 mb-2 shadow-lg rounded-md">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{bike.title}</h3>
                <p className="text-gray-600">{bike.brand} | ${bike.price} | Rating: {bike.rating}</p>
              </div>
              <div>
                <button onClick={() => handleEditClick(bike)} className="p-2 text-blue-500 hover:text-blue-600">
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
