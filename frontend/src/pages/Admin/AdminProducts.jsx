import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { getProducts, addProduct, editProduct, deleteProduct } from '../../api/api';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', img: '', price: '' });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("An error occurred while fetching products.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!form.title || !form.img || !form.price) {
      setFormError("All fields are required.");
      return;
    }
    try {
      const res = await addProduct(form);
      setProducts((prevProducts) => [...prevProducts, res.data]);
      setForm({ title: '', img: '', price: '' });
      setSuccessMessage("Product added successfully!");
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error adding product:", error);
      setFormError("An error occurred while adding the product.");
    }
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await editProduct(editingProductId, form);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === editingProductId ? res.data : product
        )
      );
      setForm({ title: '', img: '', price: '' });
      setEditingProductId(null);
      setIsFormVisible(false);
      setSuccessMessage("Product updated successfully!");
    } catch (error) {
      console.error("Error editing product:", error);
      setFormError("An error occurred while updating the product.");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      setSuccessMessage("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("An error occurred while deleting the product.");
    }
  };

  const handleEditClick = (product) => {
    setForm({ title: product.title, img: product.img, price: product.price });
    setEditingProductId(product._id);
    setIsFormVisible(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Product Management</h1>
        <button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setEditingProductId(null);
            setForm({ title: '', img: '', price: '' });
          }}
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          {isFormVisible ? "Cancel" : "Add Product"}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={editingProductId ? handleEditProduct : handleAddProduct} className="w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">{editingProductId ? "Edit Product" : "Add New Product"}</h2>
          <input type="text" name="title" placeholder="Product Title" value={form.title} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="text" name="img" placeholder="Image URL" value={form.img} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          <button type="submit" className="w-full p-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200">{editingProductId ? "Update" : "Submit"}</button>
        </form>
      )}

      <table className="w-full border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-purple-600 text-white text-left">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="3" className="p-6 text-center text-red-500">{error}</td>
            </tr>
          ) : products.length === 0 ? (
            <tr>
              <td colSpan="3" className="p-6 text-center text-gray-500">No Products Available</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id} className="hover:bg-purple-50 transition-colors">
                <td className="p-4 border-t border-gray-200">{product.title}</td>
                <td className="p-4 border-t border-gray-200">₹{product.price}</td>
                <td className="p-4 border-t border-gray-200 flex justify-center gap-4">
                  <button onClick={() => handleEditClick(product)} className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                    <Pencil />
                  </button>
                  <button onClick={() => handleDeleteProduct(product._id)} className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200">
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
